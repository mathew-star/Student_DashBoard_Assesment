
//Note : The testing is not compeleted there are some issues to research and resolve which will be done shortly.
import React from 'react';
import { render, screen } from '@testing-library/react';
import UpcomingClasses from '@/components/dashboard/UpcomingClasses';

const mockClasses = [
  {
    id: 1,
    name: "Test Class 1",
    date: "2024-07-20",
    time: "14:00",
    isLive: false,
    staff: {
      name: "Test Staff 1",
      image: "/test-image-1.jpg",
    },
    booked: false,
  },
  {
    id: 2,
    name: "Test Class 2",
    date: "2024-07-21",
    time: "15:00",
    isLive: true,
    staff: {
      name: "Test Staff 2",
      image: "/test-image-2.jpg",
    },
    booked: true,
  },
];

describe('UpcomingClasses', () => {
  it('renders all classes', () => {
    render(<UpcomingClasses classes={mockClasses} />);
    
    expect(screen.getByText('Test Class 1')).toBeInTheDocument();
    expect(screen.getByText('Test Class 2')).toBeInTheDocument();
  });

  it('displays "Book now" for unbooked classes', () => {
    render(<UpcomingClasses classes={mockClasses} />);
    
    expect(screen.getByText('Book now')).toBeInTheDocument();
  });

  it('displays "Join" for live booked classes', () => {
    render(<UpcomingClasses classes={mockClasses} />);
    
    expect(screen.getByText('Join')).toBeInTheDocument();
  });

  it('renders correct number of rows', () => {
    render(<UpcomingClasses classes={mockClasses} />);
    
    const rows = screen.getAllByRole('row');
    // +1 for the header row
    expect(rows.length).toBe(mockClasses.length + 1);
  });
});