'use client';

import { useState } from 'react';
import Image from "next/image";
import { AddStepPanel } from './AddStepPanel';
import { TasksPanel } from './TasksPanel';
import { StepActionsMenu } from './StepActionsMenu';

type PanelState = 'closed' | 'add-step' | 'tasks';

interface WorkflowStep {
  id: string;
  title: string;
  icon: string;
  stepNumber: number;
}

export default function WorkflowBuilder() {
  const [currentPanel, setCurrentPanel] = useState<PanelState>('closed');
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const openAddStepPanel = () => setCurrentPanel('add-step');
  const openTasksPanel = () => setCurrentPanel('tasks');
  const closePanels = () => setCurrentPanel('closed');
  const backToAddStep = () => setCurrentPanel('add-step');

  const handleStepClick = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const duplicateStep = (id: string) => {
    const index = workflowSteps.findIndex(step => step.id === id);
    if (index > -1) {
      const stepToDuplicate = { ...workflowSteps[index], id: crypto.randomUUID(), stepNumber: workflowSteps.length + 1 };
      const newSteps = [...workflowSteps.slice(0, index + 1), stepToDuplicate, ...workflowSteps.slice(index + 1)];
      setWorkflowSteps(newSteps.map((step, i) => ({ ...step, stepNumber: i + 1 })));
    }
    setOpenMenuId(null);
  };

  const deleteStep = (id: string) => {
    const newSteps = workflowSteps.filter(step => step.id !== id);
    setWorkflowSteps(newSteps.map((step, i) => ({ ...step, stepNumber: i + 1 })));
    setOpenMenuId(null);
  };

  const addToWorkflow = (step: { id: string, title: string; icon: string }) => {
    const newStep: WorkflowStep = {
      id: crypto.randomUUID(),
      title: step.title,
      icon: step.icon,
      stepNumber: workflowSteps.length + 1
    };
    
    setWorkflowSteps(prev => [...prev, newStep]);
    closePanels();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      <div className="bg-white rounded-lg border border-gray-200 shadow-xs w-full max-w-6xl min-h-screen">
        <div className="flex items-center p-4 border-b border-gray-200">
          <Image
            src="/icons/chevron-left.svg"
            alt="Back arrow"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <h1 className="text-lg font-medium text-gray-900 ml-6">Agentic Workflow</h1>
        </div>

        <div className="flex flex-grow">
          <div className={`p-6 pl-30 flex flex-col items-center ${currentPanel === 'add-step' ? 'w-1/2' : 'w-full'}`}>
            <div className="border border-gray-200 rounded-lg shadow-xs w-full max-w-md mx-auto">
              <div className="p-4 border-b border-gray-200">
                <span className="text-sm text-gray-500">Trigger</span>
              </div>
              <button 
                onClick={() => closePanels()}
                className="cursor-pointer p-4 flex justify-center w-full hover:bg-gray-100"
              >
                <div className="flex items-center px-4 py-2 text-blue-700 rounded-lg">
                  <Image src="/icons/plus-large.svg" alt="Add icon" width={16} height={16} className="mr-2" /> 
                  Add schedule
                </div>
              </button>
            </div>

            {/* blue connector line */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-blue-700"></div>
            </div>

            {workflowSteps.length > 0 && (
              <div className="border border-gray-200 rounded-lg shadow-xs w-full max-w-md mx-auto">
                {workflowSteps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div 
                      onClick={() => handleStepClick(step.id)}
                      className="relative w-full flex items-center p-4 cursor-pointer hover:bg-gray-50"
                    >
                      <div className="w-6 h-6 text-black flex items-center justify-center text-sm font-medium mr-3">
                        {step.stepNumber}
                      </div>
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <Image src={step.icon} alt={step.title} width={16} height={16} />
                      </div>
                      <span className="text-sm text-gray-900 font-normal">{step.title}</span>
                      {openMenuId === step.id && (
                        <StepActionsMenu 
                          onDuplicate={() => duplicateStep(step.id)}
                          onDelete={() => deleteStep(step.id)}
                          onClose={() => setOpenMenuId(null)}
                        />
                      )}
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="w-full h-px bg-gray-200"></div> 
                    )}
                  </div>
                ))}
              </div>
            )}

            {workflowSteps.length === 0 ? (
              <button 
                onClick={() => openAddStepPanel()}
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
                  <div className="w-1 h-8 bg-blue-700"></div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => openAddStepPanel()}
                    className="cursor-pointer w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:bg-blue-600 group"
                  >
                    <Image 
                      src="/icons/plus-black.svg" 
                      alt="Add step" 
                      width={24} 
                      height={24} 
                      className="svg-plus-icon group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert" 
                    />
                  </button>
                </div>
              </>
            )}
          </div>

          {(currentPanel === 'add-step') && (
            <div className="flex-shrink-0 w-1/2 py-6 pr-30 pl-1">
              <AddStepPanel 
                isOpen={currentPanel === 'add-step'} 
                onClose={closePanels} 
                onTasksClick={openTasksPanel}
                onSearchClick={addToWorkflow}
              />
            </div>
          )}

          {(currentPanel === 'tasks') && (
            <div className="flex-shrink-0 w-1/2 py-6 pr-6 pl-3">
              <TasksPanel 
                isOpen={currentPanel === 'tasks'} 
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