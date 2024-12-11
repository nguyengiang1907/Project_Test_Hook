import React from 'react';

interface ResetButtonProps {
  onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
  return <button style={{background:"red",color:"white"}} onClick={onReset}>Reset</button>;
};

export default ResetButton;
