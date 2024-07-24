"use client";
import React, { useState } from 'react'
import UpcomingHeader from '@/components/dashboard/UpcomingHeader';
import UpcomingClasses from '@/components/dashboard/UpcomingClasses';
import classes from '@/data/classes';

const UpcomingClassLayout:React.FC = () => {
  const [bookedOnly, setBookedOnly] = useState<boolean>(false);

  const handleBookedOnlyToggle = (checked: boolean) => {
    setBookedOnly(checked);
  };


  const filteredClasses = bookedOnly ? classes.filter(cls => cls.booked) : classes;
  return (
    <>
     <div className='bg-white shadow-md rounded overflow-hidden p-4'>
      <UpcomingHeader checked={bookedOnly} onCheck={handleBookedOnlyToggle} />
      <UpcomingClasses classes={filteredClasses} />
    </div>
    </>
  )
}

export default UpcomingClassLayout
