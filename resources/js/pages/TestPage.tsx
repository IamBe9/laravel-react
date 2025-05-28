import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import JobCard from '../components/JobCard';
import JobCardWide from '../components/JobCardWide';
import Tag from '../components/Tag';
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

interface Tag {
    id: number;
    name: string;
    jobs: { id: number; title: string }[];
}

interface TestPageProps {
    jobs: Job[];
    tags: Tag[];
}

const TestPage: React.FC<TestPageProps> = ({ jobs: initialJobs, tags }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Фильтрация вакансий по поисковому запросу
    const filteredJobs = initialJobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Фильтрация Featured Jobs (пример: первые 6 вакансий)
    const featuredJobs = filteredJobs.slice(0, 6);

    // Остальные вакансии для Recent Jobs
    const recentJobs = filteredJobs.slice(6);

    return (
        <Layout>
            {/* Заголовок и поле поиска */}
            <PageHeading>Let's Find Your Next Job</PageHeading>
            <div className="max-w-[600px] mx-auto mb-10">
                <Input
                    label=""
                    name="search"
                    placeholder="Web Developer..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-full px-6 py-3"
                />
            </div>

            {/* Featured Jobs */}
            <SectionHeading>Featured Jobs</SectionHeading>
            {featuredJobs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {featuredJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            ) : (
                <p>No featured jobs found.</p>
            )}

            {/* Tags */}
            <SectionHeading>Tags</SectionHeading>
            {tags.length > 0 ? (
                <div className="flex flex-wrap gap-4 mb-10">
                    {tags.map((tag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </div>
            ) : (
                <p>No tags found.</p>
            )}

            {/* Recent Jobs */}
            <SectionHeading>Recent Jobs</SectionHeading>
            {recentJobs.length > 0 ? (
                <div className="space-y-6">
                    {recentJobs.map((job) => (
                        <JobCardWide key={job.id} job={job} />
                    ))}
                </div>
            ) : (
                <p>No recent jobs found.</p>
            )}
        </Layout>
    );
};

export default TestPage;
