'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AddStepPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddStepPanel({ isOpen, onClose }: AddStepPanelProps) {
  const [searchValue, setSearchValue] = useState('');

  const actions = [
    {
      id: 'tasks',
      icon: '/icons/tasks.svg',
      title: 'Tasks',
      description: 'Add smart automations like extracting and summarising'
    },
    {
      id: 'search',
      icon: '/icons/search.svg',
      title: 'Search',
      description: 'Get text or data from uploaded repository or web'
    }
  ];

  const filteredActions = actions.filter(action =>
    action.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-xs h-full overflow-y-auto">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Add a step</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <Image 
            src="/icons/close.svg" 
            alt="Close" 
            width={24} 
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>

      <div className="p-4">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image src="/icons/search.svg" alt="Search" width={16} height={16} />
          </div>
          <input
            type="text"
            placeholder="Search actions"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          {filteredActions.map((action) => (
            <div 
              key={action.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer group"
              onClick={() => {
                console.log(`Selected: ${action.title}`);
                onClose();
              }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                  <Image src={action.icon} alt={action.title} width={16} height={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{action.title}</div>
                  <div className="text-sm text-gray-500">{action.description}</div>
                </div>
              </div>
              <Image 
                src="/icons/chevron-right.svg" 
                alt="Right arrow" 
                width={16} 
                height={16} 
                className="text-gray-400 group-hover:text-gray-600" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}