import React from 'react';
import './components/ResponsiveFrame.css';

const ResponsiveFrame: React.FC = ({ children }) => {
  return (
    <div className="responsive-frame">
      {children}
    </div>
  );
};

export default ResponsiveFrame;
