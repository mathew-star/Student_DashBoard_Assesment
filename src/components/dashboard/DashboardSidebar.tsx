
import React from 'react';
import Link from 'next/link';
import { PiUsersBold } from "react-icons/pi";
import Image from 'next/image';
import { TbLogout } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar: React.FC = () => {
  // Array of menu items with names and corresponding icons
  const menuItems = [
    { name: 'Dashboard',icon:<MdDashboard /> , active: true },
    { name: 'All classes', icon:<PiUsersBold /> },
    { name: 'Assignments', icon:<MdOutlineAssignment />  },
    { name: 'Performance', icon:<SiSimpleanalytics />},
    { name: 'Fee details', icon:<FaIndianRupeeSign /> },
    { name: 'Settings', icon: <IoSettingsOutline />},
  ];

  return (
    <div className="bg-white w-64 h-screen flex flex-col justify-between py-5 px-4">
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        
        <div className="flex flex-col  mb-2 mt-6">
          <Image src="/user.png" width={45} height={45} alt="John Doe" className=" rounded-full mr-3" />
          <div className='mb-4'>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Intermediate</p>
          </div>

          <hr />
        </div>
        

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link 
              href="#" 
              key={item.name} 
              className={`flex items-center space-x-3 p-2 rounded-lg transition duration-200 
                `}
            >
              <span className={ `text-xl rounded-full  p-2 ${item.active 
              ? 'bg-[#0467FC] text-white' 
              :  'bg-[#EFEDEA]'
          }` }>{item.icon}</span>
              <span className={`${item.active ? 'text-black' : 'text-[#404040]'}`}>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <Link 
          href="#" 
          className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200"
        >
          <span className="text-xl"><TbLogout /></span>
          <span>Log out</span>
        </Link>
        <div className="mt-4 text-xs text-gray-400 text-center">v1.2</div>
      </div>
    </div>
  );
};

export default Sidebar;