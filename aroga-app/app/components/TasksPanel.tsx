'use client';

import { useState } from 'react';
import Image from 'next/image';
import TaskIcon from './TaskIcon';

interface TasksPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onTaskSelect: (task: { id: string; title: string; icon: string }) => void;
}

export function TasksPanel({ isOpen, onClose, onBack, onTaskSelect }: TasksPanelProps) {
  const [searchValue, setSearchValue] = useState('');

  const tasks = [
    {
      id: 'extract',
      icon: '/icons/extract.svg',
      title: 'Extract',
      description: 'Get data from Word, PDF or PPT files'
    },
    {
      id: 'summarise',
      icon: '/icons/summarise.svg',
      title: 'Summarise',
      description: 'Condense text to your preferred length'
    },
    {
      id: 'write',
      icon: '/icons/write.svg',
      title: 'Write',
      description: 'Draft sentences, paragraphs or sections'
    }
  ];

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleTaskClick = (task: typeof tasks[0]) => {
    onTaskSelect({
      id: task.id,
      title: task.title,
      icon: task.icon
    });
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 w-full max-w-md">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <button 
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 mr-3"
          >
            <Image src="/icons/chevron-left.svg" alt="Back" width={20} height={20} className="cursor-pointer"/>
          </button>
          <div className="flex items-center">
            <Image src="/icons/tasks.svg" alt="Tasks" width={20} height={20} className="mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Tasks</h2>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <Image 
            src="/icons/close.svg" 
            alt="Close" 
            width={24} 
            height={24}
            className="cursor-pointer" />
        </button>
      </div>

      <div className="p-4">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image src="/icons/search.svg" alt="Search" width={16} height={16} />
          </div>
          <input
            type="text"
            placeholder="Search Tasks"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          {filteredTasks.map((task) => (
            <div 
              key={task.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer group"
              onClick={() => {handleTaskClick(task)}
              }
            >
              <div className="flex items-center">
                <TaskIcon src={task.icon} alt={task.title} />
                <div>
                  <div className="font-medium text-gray-900">{task.title}</div>
                  <div className="text-sm text-gray-500">{task.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}