'use client';

import Image from 'next/image';
import type { WorkflowStep } from '../../types/workflow';
import { StepActionsMenu } from '../StepActionsMenu';
import TaskIcon from '../ui/TaskIcon';

interface Props {
  steps: WorkflowStep[];
  openMenuId: string | null;
  onStepClick: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function StepsList({
  steps,
  openMenuId,
  onStepClick,
  onDuplicate,
  onDelete,
}: Props) {
  if (steps.length === 0) return null;

  return (
    <div className="border border-gray-200 rounded-lg shadow-xs w-full max-w-md mx-auto">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center">
          <div
            onClick={() => onStepClick(step.id)}
            className="relative w-full flex items-center p-4 cursor-pointer hover:bg-gray-50"
          >
            <div className="w-6 h-6 text-black flex items-center justify-center text-sm font-medium mr-3">
              {step.stepNumber}
            </div>
            
            <TaskIcon src={step.icon} alt={step.title} />

            <span className="text-sm text-gray-900 font-normal">{step.title}</span>

            {openMenuId === step.id && (
              <StepActionsMenu
                onDuplicate={() => onDuplicate(step.id)}
                onDelete={() => onDelete(step.id)}
                onClose={() => onStepClick(step.id)}
              />
            )}
          </div>
          {index < steps.length - 1 && <div className="w-full h-px bg-gray-200" />}
        </div>
      ))}
    </div>
  );
}