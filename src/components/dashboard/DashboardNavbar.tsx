
import Link from 'next/link'
import React from 'react'


const DashboardNavbar = () => {
  return (
    <div className=''>
      <nav className="flex space-x-4 ">
            <Link href="/blogs" className="text-gray-500 hover:text-gray-700 ">
               <span className=''>Blogs </span>
            </Link>
            <Link href="/news" className="text-gray-500 hover:text-gray-700">
               <span className='ms-8'> News</span>
            </Link>
            <Link href="/help-center" className="text-gray-500 hover:text-gray-700">
               <span className='ms-8'>Help center </span>
            </Link>
            <Link href="/customer-care" className="text-gray-500 hover:text-gray-700 ">
               <span className='ms-8'> Customer care</span>
            </Link>
          </nav>
    </div>
  )
}

export default DashboardNavbar
