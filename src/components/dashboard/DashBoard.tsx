"use client";
import React, { useState } from 'react'
import UpcomingClassLayout from './UpcomingClassLayout'
import DashboardAssignments from './DashboardAssignments'
import DashboardPagination from './DashboardPagination'


const DashBoard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 150;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data....
  };

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        <UpcomingClassLayout  />
        <DashboardAssignments />
      </div>

    <div className='flex justify-between'>
      <DashboardPagination currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage} />

        <div>
            
        </div>

    </div>
    </div>
  )
}

export default DashBoard
