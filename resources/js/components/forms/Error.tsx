import React from 'react';

interface ErrorProps {
    error?: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    if (!error) return null;
    return <p className="text-sm text-red-500 mt-1">{error}</p>;
};

export default Error;
