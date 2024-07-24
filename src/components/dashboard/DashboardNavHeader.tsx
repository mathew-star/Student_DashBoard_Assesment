import Link from 'next/link'
import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import { LuBell } from "react-icons/lu";



const DashboardNavHeader = () => {
  return (
    <>
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto ms-4">
        <div className="flex flex-col justify-between py-2">
          <div className='hidden sm:flex'>

          <DashboardNavbar/>
          </div>
          <div className="flex-shrink-0 mt-8">
            <div className='flex justify-between'>
            <h1 className="text-2xl font-bold text-gray-900 leading-[28px] ">Dashboard</h1>
            <div className='flex sm:hidden'>
              <LuBell className='w-5 h-5 me-5'/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default DashboardNavHeader
