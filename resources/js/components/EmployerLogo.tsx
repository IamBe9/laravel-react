import React from 'react';

interface Employer {
    logo: string;
}

interface EmployerLogoProps {
    employer: Employer;
    width?: number;
}

const EmployerLogo: React.FC<EmployerLogoProps> = ({ employer, width = 90 }) => {
    return (
        <img
            src={employer.logo}
            alt=""
            className="rounded-xl"
            width={width}
        />
    );
};

export default EmployerLogo;
