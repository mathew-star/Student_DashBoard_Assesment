import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'; // Importing the icon from Heroicons

const JoinButton: React.FC = () => {
  return (
    <button className="flex items-center  justify-center px-4 py-2 bg-blue-500 text-white text-base tracking-tighter leading-[20px] font-semibold rounded-[10px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Join now
      <ArrowTopRightOnSquareIcon className=" ms-1 w-[20px] h-[20px] ml-1" />
    </button>
  );
}

export default JoinButton;
