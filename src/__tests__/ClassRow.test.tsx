
//Note: The testing is not compeleted there are some issues to research and resolve which will be done shortly.
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClassRow from '@/components/dashboard/ClassRow';
import { UpcomingClass } from '@/types';

const mockClassInfo: UpcomingClass = {
  id: 1,
  name: "Test Class",
  date: "2024-07-20",
  time: "14:00",
  isLive: false,
  staff: {
    name: "Test Staff",
    image: "/test-image.jpg",
  },
  booked: false,
};

const mockOnConfirm = jest.fn();

describe('ClassRow', () => {
  it('renders class information correctly', () => {
    render(<ClassRow classInfo={mockClassInfo} index={0} onConfirm={mockOnConfirm} />);
    
    expect(screen.getByText('Test Class')).toBeInTheDocument();
    expect(screen.getByText('Test Staff')).toBeInTheDocument();
    expect(screen.getByText('Book now')).toBeInTheDocument();
  });

  it('opens dialog when "Book now" is clicked', () => {
    render(<ClassRow classInfo={mockClassInfo} index={0} onConfirm={mockOnConfirm} />);
    
    fireEvent.click(screen.getByText('Book now'));
    
    expect(screen.getByText('Are you absolutely sure?')).toBeInTheDocument();
  });

  it('calls onConfirm when booking is confirmed', () => {
    render(<ClassRow classInfo={mockClassInfo} index={0} onConfirm={mockOnConfirm} />);
    
    fireEvent.click(screen.getByText('Book now'));
    fireEvent.click(screen.getByText('Confirm'));
    
    expect(mockOnConfirm).toHaveBeenCalledWith(1);
  });

  it('displays "Join" button for live booked classes', () => {
    const liveClass = { ...mockClassInfo, isLive: true, booked: true };
    render(<ClassRow classInfo={liveClass} index={0} onConfirm={mockOnConfirm} />);
    
    expect(screen.getByText('Join')).toBeInTheDocument();
  });
});
