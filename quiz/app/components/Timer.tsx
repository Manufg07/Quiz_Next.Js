import React from 'react';

interface TimerProps {
  timeRemaining: number;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining }) => {
  return (
    <div className={`timer ${timeRemaining <= 5 ? 'text-red-500 font-bold' : ''}`}>
      Time Remaining: {timeRemaining}s
    </div>
  );
};

export default Timer;
