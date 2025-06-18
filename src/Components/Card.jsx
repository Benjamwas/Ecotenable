// src/components/ui/card.jsx
import React from 'react';
import classNames from 'classnames';

// Define the Card component
const Card = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-[#333] bg-[#1a1a1a] shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]",
        className
      )}
    >
      {children}
    </div>
  );
};

// Define the CardContent component
export const CardContent = ({ className, children }) => {
  return (
    <div className={classNames("p-6", className)}>
      {children}
    </div>
  );
};

// Export the Card component as default
export default Card;