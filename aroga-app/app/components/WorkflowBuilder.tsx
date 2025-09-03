'use client';

import { useState } from 'react';
import Image from "next/image";
import { AddStepPanel } from './AddStepPanel';

export default function WorkflowBuilder() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

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
          <div className={`p-6 flex flex-col items-center ${isPanelOpen ? 'w-1/2' : 'w-full'}`}>
            <div className="border border-gray-200 rounded-md shadow-xs w-full max-w-md mx-auto">
              <div className="p-4 border-b border-gray-200">
                <span className="text-sm text-gray-500">Trigger</span>
              </div>
              <button 
                onClick={() => setIsPanelOpen(false)}
                className="p-4 flex justify-center w-full hover:bg-gray-100"
              >
                <div className="flex items-center px-4 py-2 text-blue-700 rounded-md">
                  <Image src="/icons/plus-large.svg" alt="Add icon" width={16} height={16} className="mr-2" /> Add schedule
                </div>
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-1 h-8 bg-blue-700"></div>
            </div>

            <button 
              onClick={() => setIsPanelOpen(true)}
              className="border border-gray-200 rounded-md w-full max-w-md mx-auto shadow-xs flex justify-center py-4 hover:bg-gray-100"
            >
              <div className="flex items-center px-4 py-2 text-blue-700 rounded-md">
                <Image src="/icons/plus-large.svg" alt="Add icon" width={16} height={16} className="mr-2" /> Add step
              </div>
            </button>
          </div>

          {isPanelOpen && (
            <div className="flex-shrink-0 w-1/2 p-6">
              <AddStepPanel 
                isOpen={isPanelOpen} 
                onClose={() => setIsPanelOpen(false)} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}