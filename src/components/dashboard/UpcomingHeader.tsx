// src/components/dashboard/Header.tsx

import React from 'react';
import BookedOnlyToggle from './BookedOnlyToggle';
import DashboardHeader from './DashboardHeader';

interface HeaderProps {
  checked: boolean;
  onCheck: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ checked, onCheck }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <DashboardHeader />
      <BookedOnlyToggle checked={checked} onCheck={onCheck} />
    </div>
  );
};

export default Header;
