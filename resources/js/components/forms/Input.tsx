import React from 'react';
import Field from './Field';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, name, className = '', error, ...props }) => {
    return (
        <Field label={label} name={name} error={error}>
            <input
                type="text"
                id={name}
                name={name}
                className={`rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full ${className}`}
                {...props}
            />
        </Field>
    );
};

export default Input;
