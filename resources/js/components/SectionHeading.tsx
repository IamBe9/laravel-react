import React from 'react';

interface SectionHeadingProps {
    children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
    return (
        <div className="inline-flex items-center gap-x-2">
            <span className="w-2 h-2 bg-white inline-block"></span>
            <h3 className="font-bold text-lg">{children}</h3>
        </div>
    );
};

export default SectionHeading;
