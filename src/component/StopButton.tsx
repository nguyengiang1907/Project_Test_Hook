import React from 'react';

interface StopButtonProps {
  onStop: () => void;
}

const StopButton: React.FC<StopButtonProps> = ({ onStop }) => {
  return (
    <button style={{backgroundColor: 'Yellow',
      color: 'white',}} onClick={onStop}>Stop</button>
  );
};

export default StopButton;
