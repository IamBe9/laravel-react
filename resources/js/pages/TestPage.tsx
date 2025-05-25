import React from 'react';

interface Job {
    id: number;
    title: string;
    salary: string;
    location: string;
    schedule: string;
    url: string;
    featured: boolean;
    employer: { id: number; name: string; logo: string };
    tags: { id: number; name: string }[];
}

interface Employer {
    id: number;
    name: string;
    logo: string;
    user: { id: number; name: string; email: string };
}

interface Tag {
    id: number;
    name: string;
    jobs: { id: number; title: string }[];
}

interface TestPageProps {
    jobs: Job[];
    employers: Employer[];
    tags: Tag[];
}

const TestPage: React.FC<TestPageProps> = ({ jobs, employers, tags }) => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Test Page</h1>

            <h2>Jobs</h2>
            {jobs.length > 0 ? (
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <strong>{job.title}</strong> - {job.salary} ({job.schedule}) at {job.location}
                            <br />
                            Employer: {job.employer?.name ?? 'No employer'}
                            <br />
                            Tags: {job.tags?.map((tag) => tag.name).join(', ') || 'No tags'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs found.</p>
            )}

            <h2>Employers</h2>
            {employers.length > 0 ? (
                <ul>
                    {employers.map((employer) => (
                        <li key={employer.id}>
                            <strong>{employer.name}</strong> (Logo: {employer.logo})
                            <br />
                            User: {employer.user?.name ?? 'No user'} ({employer.user?.email ?? 'No email'})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No employers found.</p>
            )}

            <h2>Tags</h2>
            {tags.length > 0 ? (
                <ul>
                    {tags.map((tag) => (
                        <li key={tag.id}>
                            <strong>{tag.name}</strong>
                            <br />
                            Jobs: {tag.jobs?.map((job) => job.title).join(', ') || 'No jobs'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tags found.</p>
            )}
        </div>
    );
};

export default TestPage;
