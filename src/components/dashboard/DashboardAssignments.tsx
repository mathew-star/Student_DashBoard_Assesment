import React from 'react'


interface Assignment {
    id: number;
    name: string;
    deadline: string;
  }


const assignments: Assignment[] = [
    { id: 1, name: 'Logo design for a Airline', deadline: '20/06/2024' },
    { id: 2, name: 'UI/UX Design - Ecommerce Mobile app', deadline: '22/06/2024' },
    { id: 3, name: 'User Persona and User Journey', deadline: '24/06/2024' },
    { id: 4, name: 'Typefaces', deadline: '28/06/2024' },
  ];

const DashboardAssignments: React.FC = () => {
  return (
    <div className="bg-white rounded shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4">Assignments <span className='text-[#737475]'>(4)</span></h2>
    <ul className="space-y-4">
      {assignments.map((assignment) => (
        <li key={assignment.id} className="flex justify-between items-center border border-gray-200 rounded p-3">
          <div>
            <h3 className="font-medium text-sm leading-[21px] tracking-[-0.1px] ">{assignment.name}</h3>
            <p className=" text-gray-500 font-[400px] text-sm leading-[19px] tracking-[-0.28px]">Deadline: {assignment.deadline}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default DashboardAssignments
