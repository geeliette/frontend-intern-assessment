'use client';

import { useState } from 'react';
import Image from 'next/image';

import type { PanelState, WorkflowStep } from '../../types/workflow';

import HeaderBar from './HeaderBar';
import TriggerCard from './TriggerCard';
import StepsList from './StepsList';
import AddStepButton from './AddStepButton';

import { AddStepPanel } from '../panels/AddStepPanel';
import { TasksPanel } from '../panels/TasksPanel';

export default function WorkflowBuilder() {
  const [currentPanel, setCurrentPanel] = useState<PanelState>('closed');
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const openAddStepPanel = () => setCurrentPanel('add-step');
  const openTasksPanel = () => setCurrentPanel('tasks');
  const closePanels = () => setCurrentPanel('closed');
  const backToAddStep = () => setCurrentPanel('add-step');

  const handleStepClick = (id: string) => setOpenMenuId(openMenuId === id ? null : id);

  const duplicateStep = (id: string) => {
    const index = workflowSteps.findIndex(s => s.id === id);
    if (index > -1) {
      const dup = { ...workflowSteps[index], id: crypto.randomUUID(), stepNumber: workflowSteps.length + 1 };
      const next = [...workflowSteps.slice(0, index + 1), dup, ...workflowSteps.slice(index + 1)];
      setWorkflowSteps(next.map((s, i) => ({ ...s, stepNumber: i + 1 })));
    }
    setOpenMenuId(null);
  };

  const deleteStep = (id: string) => {
    const next = workflowSteps.filter(s => s.id !== id);
    setWorkflowSteps(next.map((s, i) => ({ ...s, stepNumber: i + 1 })));
    setOpenMenuId(null);
  };

  const addToWorkflow = (step: { id: string; title: string; icon: string }) => {
    const newStep: WorkflowStep = {
      id: crypto.randomUUID(),
      title: step.title,
      icon: step.icon,
      stepNumber: workflowSteps.length + 1,
    };
    setWorkflowSteps(prev => [...prev, newStep]);
    closePanels();
  };

  const leftWidth = currentPanel === 'add-step' || currentPanel === 'tasks' ? 'w-1/2' : 'w-full';

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      <div className="bg-white rounded-lg border border-gray-200 shadow-xs w-full max-w-6xl min-h-screen">
        <HeaderBar />

        <div className="flex flex-grow">
          <div className={`p-6 pl-30 flex flex-col items-center ${leftWidth}`}>
            <TriggerCard onClick={closePanels} />

            <div className="flex justify-center">
              <div className="w-1 h-8 bg-blue-700" />
            </div>

            <StepsList
              steps={workflowSteps}
              openMenuId={openMenuId}
              onStepClick={handleStepClick}
              onDuplicate={duplicateStep}
              onDelete={deleteStep}
            />

            {workflowSteps.length === 0 ? (
              <button
                onClick={openAddStepPanel}
                className="cursor-pointer border border-gray-200 rounded-lg w-full max-w-md mx-auto shadow-xs flex justify-center py-4 hover:bg-gray-100"
              >
                <div className="flex items-center px-4 py-2 text-blue-700 rounded-lg">
                  <Image src="/icons/plus-large.svg" alt="Add icon" width={16} height={16} className="mr-2" />
                  Add step
                </div>
              </button>
            ) : (
              <>
                <div className="flex justify-center">
                  <div className="w-1 h-8 bg-blue-700" />
                </div>
                <AddStepButton onClick={openAddStepPanel} />
              </>
            )}
          </div>

          {currentPanel === 'add-step' && (
            <div className="flex-shrink-0 w-1/2 py-6 px-6 pr-30">
              <AddStepPanel
                isOpen
                onClose={closePanels}
                onTasksClick={openTasksPanel}
                onSearchClick={addToWorkflow}
              />
            </div>
          )}

          {currentPanel === 'tasks' && (
            <div className="flex-shrink-0 w-1/2 py-6 px-6 pr-30">
              <TasksPanel
                isOpen
                onClose={closePanels}
                onBack={backToAddStep}
                onTaskSelect={addToWorkflow}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
