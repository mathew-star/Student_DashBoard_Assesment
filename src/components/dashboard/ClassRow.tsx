import React, { useEffect, useState } from 'react';
import { TableRow, TableCell } from "../ui/table";
import JoinButton from '../ui/JoinButton';
import { GoDotFill } from "react-icons/go";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { IoMdTime } from "react-icons/io";

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '../ui/dialog';
import { UpcomingClass }  from '@/types';

// Interface for the props passed to ClassRow component
interface ClassRowProps {
  classInfo: UpcomingClass;
  index: number;
  onConfirm: (classId: number) => void;
}
// Function to format date and time into a readable string
function formatDateTime(date: string, time: string): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dateObj = new Date(`${date}T${time}`);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;

  const ordinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return `${ordinal(day)} ${month} ${formattedHours}${ampm}`;
}
// Function to calculate the remaining time until a specific date and time
function calculateRemainingTime(date: string, time: string): string {
  const classDateTime = new Date(`${date}T${time}`);
  const now = new Date();

  const diffMs = classDateTime.getTime() - now.getTime();
  if (diffMs <= 0) return "Live";

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays > 1) return `${diffDays} days`;

  const diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

  return `${String(diffHrs).padStart(2, '0')}:${String(diffMins).padStart(2, '0')}:${String(diffSecs).padStart(2, '0')}`;
}

const ClassRow: React.FC<ClassRowProps> = ({ classInfo, index, onConfirm }) => {
  const [remainingTime, setRemainingTime] = useState<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (classInfo.booked && !classInfo.isLive) {
      interval = setInterval(() => {
        const timeString = calculateRemainingTime(classInfo.date, classInfo.time);
        setRemainingTime(timeString);
        if (timeString === "Live") {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [classInfo.booked, classInfo.isLive, classInfo.date, classInfo.time]);

  return (
    <>
  {/* Note : The Mobile view is under development go to do lot more clean works on the mobile view */}
  {/* Mobile Layout
  <div className="block border p-4 rounded sm:hidden w-full mb-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{classInfo.name}</p>
          {classInfo.isLive && (
            <span className="flex items-center text-red-500 text-md font-medium">
              <GoDotFill className="mr-1" />
              Live (0:54)
            </span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={classInfo.staff.image} alt={classInfo.staff.name} />
            <AvatarFallback>{classInfo.staff.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{classInfo.staff.name}</p>
            <p className="text-gray-500 text-sm">Additional details</p>
          </div>
        </div>
        <div className="mt-2">
          {classInfo.booked ? (
            classInfo.isLive ? (
              <button className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white text-base tracking-tighter leading-[20px] font-semibold rounded-[10px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Join now
              <ArrowTopRightOnSquareIcon className=" ms-1 w-[20px] h-[20px] ml-1" />
            </button>
            ) : (
              <p className="text-gray-600 flex text-sm">
                {calculateRemainingTime(classInfo.date, classInfo.time)}
                <IoMdTime className="ml-2" size={18} />
              </p>
            )
          ) : (
            <Dialog>
              <DialogTrigger className='w-full'>
              <button className="px-7 py-2 w-full text-black text-[14px] tracking-[-0.05px] leading-[20px]text-[15px] font-medium bg-white border border-gray-300 rounded shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                Book now
              </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will book your class.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                  <button className="px-7 py-2 mt-3 text-black text-[15px] font-medium bg-white border border-gray-300 rounded shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    Cancel
                  </button>
                  </DialogClose>
                  <DialogClose asChild>
                  <button onClick={() => {
                  onConfirm(classInfo.id);
                  setRemainingTime(calculateRemainingTime(classInfo.date, classInfo.time));
                }} className="px-4 py-2 bg-blue-500 text-white text-base font-semibold rounded-[10px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Confirm
                </button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div> */}


    <TableRow >
      <TableCell>
        <div className='flex items-center'>
          <p className='me-5'>{index + 1}</p>
          <div className='flex flex-col '>
            <p className="font-semibold text-[14px] tracking-[-0.05px] leading-[20px]">{classInfo.name}</p>
            <p className="text-sm flex items-center text-gray-500">
              {classInfo.isLive ? (
                <>
                  <span className="flex items-center text-red-500 text-md font-medium ">
                    <span style={{ display: 'flex', alignItems: 'center', marginTop: '1px', width: '18px', height: '18px' }}>
                      <GoDotFill />
                    </span>
                    Live 
                  </span>
                  <span className='ml-1'>(0:54)</span>
                </>
              ) : (
                <span>{formatDateTime(classInfo.date, classInfo.time)}</span>
              )}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={classInfo.staff.image} alt={classInfo.staff.name} />
            <AvatarFallback>{classInfo.staff.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-[14px] tracking-[-0.05px] leading-[20px]">{classInfo.staff.name}</p>
            <p className="text-[14px] tracking-[-0.05px] leading-[20px] text-gray-500 ">Additional details</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        {classInfo.booked ? (
          <>
            {classInfo.isLive ? (
              <JoinButton />
            ) : (
                <p className="text-gray-600 flex ml-6 text-[15px]">
                {calculateRemainingTime(classInfo.date, classInfo.time)} 
                <span className=' ms-2' style={{ fontSize: '18px' }}>
                  <IoMdTime />
                </span>
              </p>
            )}
          </>
        ) : (
          <Dialog>
            <DialogTrigger>
              <button className="px-7 py-2 text-black text-[14px] tracking-[-0.05px] leading-[20px]text-[15px] font-medium bg-white border border-gray-300 rounded shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                Book now
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will book your class.
                </DialogDescription>
              </DialogHeader>
              <hr className='mt-8' />
              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-7 py-2 text-black text-[15px] font-medium bg-white border border-gray-300 rounded shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    Cancel
                  </button>
                </DialogClose>
                <DialogClose asChild>
                <button onClick={() => {
                  onConfirm(classInfo.id);
                  setRemainingTime(calculateRemainingTime(classInfo.date, classInfo.time));
                }} className="px-4 py-2 bg-blue-500 text-white text-base font-semibold rounded-[10px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Confirm
                </button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </TableCell>
    </TableRow>

    </>
  );
}

export default ClassRow;
