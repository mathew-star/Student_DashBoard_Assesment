// src/components/dashboard/BookedOnlyToggle.tsx

import React from 'react';

interface BookedOnlyToggleProps {
  checked: boolean;
  onCheck: (checked: boolean) => void;
}

const BookedOnlyToggle: React.FC<BookedOnlyToggleProps> = ({ checked, onCheck }) => {
  return (
    <div className='flex items-center'>
      <span className="roboto text-lg text-gray-500 mr-2">Booked only</span>
      <input 
        type="checkbox" 
        className="toggle w-4 h-4" 
        checked={checked} 
        onChange={(e) => onCheck(e.target.checked)} 
      />
    </div>
  );
}

export default BookedOnlyToggle;
