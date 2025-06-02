import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import PageHeading from '../components/PageHeading';
import JobCardWide from '../components/JobCardWide';
import Input from '../components/forms/Input';

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

interface IndexProps {
    jobs: Job[];
}

const Index: React.FC<IndexProps> = ({ jobs: initialJobs }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Фильтрация вакансий по поисковому запросу
    const filteredJobs = initialJobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <PageHeading>Job Listings</PageHeading>
            <div className="max-w-[600px] mx-auto mb-10">
                <Input
                    label=""
                    name="search"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-full px-6 py-3"
                />
            </div>
            <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => <JobCardWide key={job.id} job={job} />)
                ) : (
                    <p>No jobs found.</p>
                )}
            </div>
        </Layout>
    );
};

export default Index;
