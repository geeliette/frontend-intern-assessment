'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface StepActionsMenuProps {
  onDuplicate: () => void;
  onDelete: () => void;
  onClose: () => void;
}

export function StepActionsMenu({ onDuplicate, onDelete, onClose }: StepActionsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={menuRef} className="absolute bg-white rounded-lg shadow-md border border-gray-200 py-2 w-40 z-10 top-full right-0 mt-0">
      <button 
        onClick={() => { onDuplicate(); onClose(); }}
        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <Image src="/icons/duplicate.svg" alt="Duplicate" width={16} height={16} className="mr-2" />
        Duplicate
      </button>
      <button 
        onClick={() => { onDelete(); onClose(); }}
        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <Image src="/icons/delete.svg" alt="Delete" width={16} height={16} className="mr-2" />
        Delete
      </button>
    </div>
  );
}
