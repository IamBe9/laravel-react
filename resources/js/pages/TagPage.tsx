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

interface TagPageProps {
    tagName: string;
    jobs: Job[];
}

const TagPage: React.FC<TagPageProps> = ({ tagName, jobs }) => {
    return (
        <Layout>
            <PageHeading>{tagName}</PageHeading>
            <div className="space-y-6">
                {jobs.length > 0 ? (
                    jobs.map((job) => <JobCardWide key={job.id} job={job} />)
                ) : (
                    <p>No jobs found with this tag.</p>
                )}
            </div>
        </Layout>
    );
};

export default TagPage;
