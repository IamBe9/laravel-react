import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    const baseClasses = 'bg-blue-800 rounded py-2 px-6 font-bold';
    return (
        <button className={`${baseClasses} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
