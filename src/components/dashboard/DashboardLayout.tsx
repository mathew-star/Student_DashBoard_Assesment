import React from 'react'
import DashboardSidebar from './DashboardSidebar';
import DashboardNavHeader from './DashboardNavHeader';



interface DashboardLayout {
    children: React.ReactNode;
  }
  
const DashboardLayout: React.FC<DashboardLayout> = ({children}) => {
  return (
    <>
    <div className="flex h-screen bg-gray-100">
      <div className="hidden sm:flex">
        <DashboardSidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        < DashboardNavHeader/>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
    </>
  )
}

export default DashboardLayout
