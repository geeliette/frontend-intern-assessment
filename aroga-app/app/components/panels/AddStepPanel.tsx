'use client';

import { useState } from 'react';
import Image from 'next/image';
import TaskIcon from '../ui/TaskIcon';
import BasePanel from '../ui/BasePanel';
import type { PanelItem } from '../../types/panel';

interface AddStepPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onTasksClick: () => void;
  onSearchClick: (step: { id: string; title: string; icon: string }) => void;
}

export function AddStepPanel({ isOpen, onClose, onTasksClick, onSearchClick }: AddStepPanelProps) {
  const items: PanelItem[] = [
    {
      id: 'tasks',
      icon: '/icons/tasks.svg',
      title: 'Tasks',
      description: 'Add smart automations like extracting and summarising',
    },
    {
      id: 'search',
      icon: '/icons/search.svg',
      title: 'Search',
      description: 'Get text or data from uploaded repository or web',
    }
  ];

  return (
    <BasePanel
      isOpen={isOpen}
      title="Add a step"
      items={items}
      onClose={onClose}
      searchPlaceholder="Search actions"
      showChevronForIds={['tasks']}
      onItemClick={(item) => {
        if (item.id === 'tasks') {
          onTasksClick();
        } else if (item.id === 'search') {
          onSearchClick({ id: item.id, title: item.title, icon: item.icon });
        }
      }}
    />
  );
}