import React from 'react';
import { useNavigate } from 'react-router-dom';

function Prompt({ message, onClose }) {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="prompt-overlay">
      <div className="prompt-box">
        <p className="prompt-message">{message}</p>
        <button className="prompt-button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Prompt;
