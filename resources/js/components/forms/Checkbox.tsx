import React from 'react';
import Field from './Field';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, className = '', error, ...props }) => {
    return (
        <Field label={label} name={name} error={error}>
            <div className={`rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full ${className}`}>
                <input type="checkbox" id={name} name={name} {...props} />
                <span className="pl-1">{label}</span>
            </div>
        </Field>
    );
};

export default Checkbox;
