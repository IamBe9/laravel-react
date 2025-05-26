import React from 'react';

interface PanelProps {
    children: React.ReactNode;
    className?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className = '' }) => {
    const baseClasses =
        'p-4 bg-white/5 rounded-xl border border-transparent hover:border-blue-800 group transition-colors duration-300';

    return <div className={`${baseClasses} ${className}`}>{children}</div>;
};

export default Panel;
