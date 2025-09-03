'use client';

import Image from "next/image";

export default function WorkflowBuilder() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      <div className="bg-white rounded-lg border border-gray-200 w-full max-w-6xl min-h-screen">
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

        <div className="p-6">
          <div className="border border-gray-200 rounded-md w-full max-w-md mx-auto">
            <div className="p-4 border-b border-gray-200">
              <span className="text-sm text-gray-500">Trigger</span>
            </div>
            <button className="p-4 flex justify-center w-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <div className="flex items-center px-4 py-2 text-blue-700 rounded-md">
                <Image src="/icons/plus-large.svg" alt="Add icon" width={16} height={16} className="mr-2" /> Add schedule
              </div>
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-1 h-10 bg-blue-700"></div>
          </div>

          <button className="border border-gray-200 rounded-md w-full max-w-md mx-auto flex justify-center py-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <div className="flex items-center px-4 py-2 text-blue-700 rounded-md">
              <Image src="/icons/plus-large.svg" alt="Add icon" width={16} height={16} className="mr-2" /> Add step
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}