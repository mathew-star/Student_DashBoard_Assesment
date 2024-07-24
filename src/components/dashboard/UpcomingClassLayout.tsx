"use client";
import React, { useState } from 'react'
import UpcomingHeader from '@/components/dashboard/UpcomingHeader';
import UpcomingClasses from '@/components/dashboard/UpcomingClasses';
import { UpcomingClass } from "@/types";
import classes from '@/data/classes';

const UpcomingClassLayout:React.FC = () => {
  const [bookedOnly, setBookedOnly] = useState<boolean>(false);
  const [upcommingClasses, setUpcommingClasses]= useState<UpcomingClass[]>(classes)



  const handleBookedOnlyToggle = (checked: boolean) => {
    setBookedOnly(checked);
  };

  const handleConfirm = (classId: number) => {
    const updatedClasses = upcommingClasses.map(cls => 
      cls.id === classId ? { ...cls, booked: true } : cls
    );
    setUpcommingClasses(updatedClasses);
  };

  const filteredClasses = bookedOnly ? upcommingClasses.filter(cls => cls.booked) : upcommingClasses;

  console.log("filtred: ",filteredClasses)
  return (
    <>
     <div className='bg-white shadow-md rounded overflow-hidden p-4'>
      <UpcomingHeader checked={bookedOnly} onCheck={handleBookedOnlyToggle} />
      <UpcomingClasses classes={filteredClasses} onConfirm={handleConfirm} />
    </div>
    </>
  )
}

export default UpcomingClassLayout
