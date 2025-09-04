'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { PanelItem } from '../../types/panel';
import TaskIcon from './TaskIcon';

interface BasePanelProps {
  isOpen: boolean;
  title: string;
  icon?: string;
  searchPlaceholder?: string;
  items: PanelItem[];
  onItemClick: (item: PanelItem) => void;
  onClose: () => void;
  onBack?: () => void;
  className?: string;
  showChevronForIds?: string[];
}

export default function BasePanel({
  isOpen,
  title,
  icon,
  searchPlaceholder = 'Search…',
  items,
  onItemClick,
  onClose,
  onBack,
  className = 'bg-white rounded-lg border border-gray-200 shadow-xs h-auto overflow-y-auto',
  showChevronForIds = [],
}: BasePanelProps) {
  const [searchValue, setSearchValue] = useState('');

  if (!isOpen) return null;

  const filtered = items.filter(i =>
    i.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={className}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          {onBack && (
            <button
              onClick={onBack}
              className="cursor-pointer text-gray-400 hover:text-gray-600 mr-3"
              aria-label="Back"
            >
              <Image src="/icons/chevron-left.svg" alt="Back" width={20} height={20} />
            </button>
          )}
          {icon && (
            <Image src={icon} alt="" width={20} height={20} className="mr-2" />
          )}
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
        </button>
      </div>

      <div className="p-4">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Image src="/icons/search.svg" alt="" width={16} height={16} />
          </div>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md outline-none"
          />
        </div>

        <div className="space-y-2">
          {filtered.map((item) => {
            const showChevron = showChevronForIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => onItemClick(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onItemClick(item)}
              >
                <div className="flex items-center">
                  <TaskIcon src={item.icon} alt={item.title} />
                  <div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    {item.description && (
                      <div className="text-sm text-gray-500">{item.description}</div>
                    )}
                  </div>
                </div>

                {showChevron && (
                  <Image
                    src="/icons/chevron-right.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="opacity-60 group-hover:opacity-100"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
