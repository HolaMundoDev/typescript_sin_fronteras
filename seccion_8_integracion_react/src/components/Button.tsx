import React, { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({children, handleClick}: ButtonProps) {
    return <button 
    className='button is-primary'
    onClick={handleClick}
    >
      {children}
    </button>
    
}