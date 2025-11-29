import React from 'react';
import './FireAnimation.css';

const FireAnimation = () => {
  return (
    <div className="fire-container">
      <div className="flame main-flame"></div>
      <div className="flame medium-flame"></div>
      <div className="flame small-flame"></div>
    </div>
  );
};

export default FireAnimation;
