import React from 'react';

interface CheckboxProps {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | undefined;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked, onChange, error }) => {
    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-800 rounded"
            />
            <label htmlFor={name} className="text-sm font-medium text-white">
                {label}
            </label>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Checkbox;
