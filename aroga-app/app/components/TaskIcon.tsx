import Image from 'next/image';

interface TaskIconProps {
  src: string;
  alt: string;
}

const TaskIcon = ({ src, alt }: TaskIconProps) => (
  <div className="w-8 h-8 border border-gray-200 rounded-md flex items-center justify-center mr-3 p-1.5">
    <div className="w-full h-full relative">
      <Image 
        src={src} 
        alt={alt} 
        fill
        sizes="20px"
        className="object-contain"
      />
    </div>
  </div>
);

export default TaskIcon;