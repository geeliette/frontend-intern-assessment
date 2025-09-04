'use client';

import Image from 'next/image';

export default function HeaderBar() {
  return (
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
  );
}