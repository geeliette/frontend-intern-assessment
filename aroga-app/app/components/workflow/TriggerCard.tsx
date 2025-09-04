'use client';

import Image from 'next/image';

export default function TriggerCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-xs w-full max-w-md mx-auto">
      <div className="p-4 border-b border-gray-200">
        <span className="text-sm text-gray-500">Trigger</span>
      </div>
      <button 
        onClick={onClick}
        className="cursor-pointer p-4 flex justify-center w-full hover:bg-gray-100"
      >
        <div className="flex items-center px-4 py-2 text-blue-700 rounded-lg">
          <Image src="/icons/plus-large.svg" alt="Add icon" width={16} height={16} className="mr-2" />
          Add schedule
        </div>
      </button>
    </div>
  );
}
