'use client';

import Image from 'next/image';

export default function AddStepButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="cursor-pointer w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:bg-blue-600 group"
      >
        <Image
          src="/icons/plus-black.svg"
          alt="Add step"
          width={24}
          height={24}
          className="svg-plus-icon group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert"
        />
      </button>
    </div>
  );
}
