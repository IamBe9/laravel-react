import React from 'react';
import EmployerLogo from './EmployerLogo';
import Tag from './Tag';

interface Employer {
    name: string;
    logo: string; // Добавлено поле logo
}

interface TagType {
    name: string;
}

interface Job {
    employer: Employer;
    url: string;
    title: string;
    salary: string;
    tags: TagType[];
}

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <div className="p-4 bg-white/5 rounded-xl border border-transparent hover:border-blue-800 group transition-colors duration-300 flex flex-col text-center">
            <div className="self-start text-sm">{job.employer.name}</div>

            <div className="py-8">
                <h3 className="group-hover:text-blue-800 text-xl font-bold transition-colors duration-300">
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                        {job.title}
                    </a>
                </h3>
                <p className="text-sm mt-4">{job.salary}</p>
            </div>

            <div className="flex justify-between items-center mt-auto">
                <div>
                    {job.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} size="small" />
                    ))}
                </div>

                <EmployerLogo employer={job.employer} width={42} />
            </div>
        </div>
    );
};

export default JobCard;
