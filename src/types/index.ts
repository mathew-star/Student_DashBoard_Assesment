export interface UpcomingClass {
  id: number;
  name: string;
  date: string;
  time: string;
  isLive?: boolean;
  staff: {
    name: string;
    image: string;
  };

  booked: boolean;
  timer?: number; 
}