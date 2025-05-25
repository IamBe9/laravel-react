import React from 'react';
import Field from './Field';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ label, name, children, className = '', ...props }) => {
    return (
        <Field label={label} name={name}>
            <select
                id={name}
                name={name}
                className={`rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full ${className}`}
                {...props}
            >
                {children}
            </select>
        </Field>
    );
};

export default Select;
