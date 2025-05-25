import React from 'react';

interface LabelProps {
    name: string;
    label: string;
}

const Label: React.FC<LabelProps> = ({ name, label }) => {
    return (
        <div className="inline-flex items-center gap-x-2">
            <span className="w-2 h-2 bg-white inline-block"></span>
            <label className="font-bold" htmlFor={name}>
                {label}
            </label>
        </div>
    );
};

export default Label;
