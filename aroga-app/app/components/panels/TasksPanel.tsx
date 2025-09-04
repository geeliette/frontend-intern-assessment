'use client';

import BasePanel from '../ui/BasePanel';
import type { PanelItem } from '../../types/panel';

interface TasksPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onTaskSelect: (task: { id: string; title: string; icon: string }) => void;
}

export function TasksPanel({ isOpen, onClose, onBack, onTaskSelect }: TasksPanelProps) {
  const items: PanelItem[] = [
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

  return (
    <BasePanel
      isOpen={isOpen}
      title="Tasks"
      icon="/icons/tasks.svg"
      items={items}
      onClose={onClose}
      onBack={onBack}
      searchPlaceholder="Search Tasks"
      onItemClick={(item) => onTaskSelect({
        id: item.id,
        title: item.title,
        icon: item.icon,
      })}
    />
  );
}