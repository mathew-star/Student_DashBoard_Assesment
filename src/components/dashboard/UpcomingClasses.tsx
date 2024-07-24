import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead } from "../ui/table";
import ClassRow from './ClassRow';
import { UpcomingClass } from '@/types';

interface UpcomingClassesProps {
  classes: UpcomingClass[];
  onConfirm: (classId: number) => void;
}

const UpcomingClasses: React.FC<UpcomingClassesProps> = ({ classes: initialClasses, onConfirm }) => {



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
          {initialClasses.map((classInfo: UpcomingClass, index: number) => (
            <ClassRow 
              key={classInfo.id} 
              classInfo={classInfo} 
              index={index} 
              bookconfirm={onConfirm }
            />
          ))}
        </TableBody>
      </Table>
  );
}

export default UpcomingClasses;
