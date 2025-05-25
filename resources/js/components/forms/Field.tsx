import React from 'react';
import Label from './Label';
import Error from './Error';

interface FieldProps {
    label?: string;
    name: string;
    children: React.ReactNode;
    error?: string;
}

const Field: React.FC<FieldProps> = ({ label, name, children, error }) => {
    return (
        <div>
            {label && <Label name={name} label={label} />}
            <div className="mt-1">
                {children}
                <Error error={error} />
            </div>
        </div>
    );
};

export default Field;
