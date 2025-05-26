import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import Form from '../components/forms/Form';
import Input from '../components/forms/Input';
import Select from '../components/forms/Select';
import Checkbox from '../components/forms/Checkbox';
import Button from '../components/forms/Button';
import Divider from '../components/forms/Divider';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import JobCard from '../components/JobCard';
import JobCardWide from '../components/JobCardWide';
import EmployerLogo from '../components/EmployerLogo';
import Panel from '../components/Panel';
import Tag from '../components/Tag';

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

interface JobFormValues {
    title: string;
    salary: string;
    location: string;
    schedule: string;
    url: string;
    featured: boolean;
    tags: string;
}

const TestPage: React.FC<TestPageProps> = ({ jobs: initialJobs, employers, tags }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isWideLayout, setIsWideLayout] = useState(false);

    // Фильтрация вакансий по поиску
    const filteredJobs = initialJobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <div className="text-center mt-10">
                <h2 className="text-4xl font-bold text-white">Let's Find Your Next Job</h2>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Web Developer..."
                    className="mt-6 w-full max-w-md p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <Divider />

            {/* Featured Jobs */}
            <SectionHeading>Featured Jobs</SectionHeading>
            {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredJobs.slice(0, 3).map((job) =>
                        isWideLayout ? (
                            <JobCardWide key={job.id} job={job} />
                        ) : (
                            <JobCard key={job.id} job={job} />
                        )
                    )}
                </div>
            ) : (
                <p>No featured jobs found.</p>
            )}

            <Divider />

            {/* Tags */}
            <SectionHeading>Tags</SectionHeading>
            {tags.length > 0 ? (
                <Panel>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag) => (
                            <Tag key={tag.id} tag={tag} />
                        ))}
                    </div>
                </Panel>
            ) : (
                <p>No tags found.</p>
            )}

            <Divider />

            {/* Recent Jobs */}
            <SectionHeading>Recent Jobs</SectionHeading>
            {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                    {filteredJobs.map((job) => (
                        <JobCardWide key={job.id} job={job} />
                    ))}
                </div>
            ) : (
                <p>No recent jobs found.</p>
            )}

            <Divider />

            {/* Форма для создания вакансии (оставляем для тестирования) */}
            <SectionHeading>Create a Job</SectionHeading>
            <Form<JobFormValues>
                action="/jobs"
                method="post"
                initialValues={{
                    title: '',
                    salary: '',
                    location: '',
                    schedule: 'Full Time',
                    url: '',
                    featured: false,
                    tags: '',
                }}
                onSubmit={(form) => {
                    form.post('/jobs', {
                        preserveState: true,
                        onSuccess: () => {
                            form.reset();
                        },
                    });
                }}
            >
                {({ errors }) => (
                    <>
                        <Input label="Title" name="title" required error={errors.title} />
                        <Input label="Salary" name="salary" required error={errors.salary} />
                        <Input label="Location" name="location" required error={errors.location} />
                        <Select label="Schedule" name="schedule" required error={errors.schedule}>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                        </Select>
                        <Input label="Application URL" name="url" type="url" required error={errors.url} />
                        <Checkbox label="Featured Job" name="featured" />
                        <Input
                            label="Tags (comma-separated)"
                            name="tags"
                            placeholder="e.g., php, laravel, remote"
                            error={errors.tags}
                        />
                        <Button type="submit">Create Job</Button>
                    </>
                )}
            </Form>
        </Layout>
    );
};

export default TestPage;
