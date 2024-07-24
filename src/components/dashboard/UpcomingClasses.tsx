import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead } from "../ui/table";
import ClassRow from './ClassRow';
import { UpcomingClass } from '@/types';

interface UpcomingClassesProps {
  classes: UpcomingClass[];
}

const UpcomingClasses: React.FC<UpcomingClassesProps> = ({ classes: initialClasses }) => {
  const [Upclasses, setUpClasses] = useState<UpcomingClass[]>(initialClasses);

  useEffect(() => {
    // Update state when initialClasses prop changes
    setUpClasses(initialClasses);
  }, [initialClasses]);
  console.log(Upclasses)

  const handleConfirm = (classId: number) => {
    const updatedClasses = Upclasses.map(cls => 
      cls.id === classId ? { ...cls, booked: true } : cls
    );
    setUpClasses(updatedClasses);
  };

  return (


      <Table>
        <TableHeader className="hidden md:table-header-group">
          <TableRow>

              <TableHead>Class name</TableHead>
              <TableHead>Staff name</TableHead>
              <TableHead>Actions</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {Upclasses.map((classInfo: UpcomingClass, index: number) => (
            <ClassRow 
              key={classInfo.id} 
              classInfo={classInfo} 
              index={index} 
              onConfirm={handleConfirm} 
            />
          ))}
        </TableBody>
      </Table>
  );
}

export default UpcomingClasses;
