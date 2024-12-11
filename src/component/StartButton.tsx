import React from 'react';

interface StartButtonProps {
  onStart: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStart }) => {
  return (
    <button style={{backgroundColor: 'Green', 
      color: 'white',}} onClick={onStart}>Start</button>
  );
};

export default StartButton;
