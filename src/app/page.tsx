
import DashBoard from '@/components/dashboard/DashBoard';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import UpcomingClassLayout from '@/components/dashboard/UpcomingClassLayout';
import React  from 'react';




const Home: React.FC = () => {
  

  return (

    <DashboardLayout>
      <DashBoard />
    </DashboardLayout>
    // <main className="min-h-screen p-8 bg-gray-100">
    //   <div className="max-w-4xl mx-auto">
    //     <UpcomingClassLayout />
    //   </div>
    // </main>
  );
};

export default Home;
