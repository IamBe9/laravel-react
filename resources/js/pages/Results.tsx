import React from 'react';
import Layout from '../layouts/Layout';
import PageHeading from '../components/PageHeading';
import JobCardWide from '../components/JobCardWide';

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

interface ResultsProps {
    jobs: Job[];
}

const Results: React.FC<ResultsProps> = ({ jobs }) => {
    return (
        <Layout>
            <PageHeading>Results</PageHeading>
            <div className="space-y-6">
                {jobs.length > 0 ? (
                    jobs.map((job) => <JobCardWide key={job.id} job={job} />)
                ) : (
                    <p>No jobs found.</p>
                )}
            </div>
        </Layout>
    );
};

export default Results;
