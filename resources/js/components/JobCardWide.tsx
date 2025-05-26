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

interface JobCardWideProps {
    job: Job;
}

const JobCardWide: React.FC<JobCardWideProps> = ({ job }) => {
    return (
        <div className="p-4 bg-white/5 rounded-xl border border-transparent hover:border-blue-800 group transition-colors duration-300 flex gap-x-6">
            <div>
                <EmployerLogo employer={job.employer} />
            </div>

            <div className="flex-1 flex flex-col">
                <a
                    href="#"
                    className="self-start text-sm text-gray-400 transition-colors duration-300"
                >
                    {job.employer.name}
                </a>

                <h3 className="font-bold text-xl mt-3 group-hover:text-blue-800">
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                        {job.title}
                    </a>
                </h3>

                <p className="text-sm text-gray-400 mt-auto">{job.salary}</p>
            </div>

            <div>
                {job.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </div>
        </div>
    );
};

export default JobCardWide;
