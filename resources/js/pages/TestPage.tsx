import React from 'react';
import Form from '../components/forms/Form';
import Input from '../components/forms/Input';
import Select from '../components/forms/Select';
import Checkbox from '../components/forms/Checkbox';
import Button from '../components/forms/Button';
import Divider from '../components/forms/Divider';

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
    return (
        <div className="p-5 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Test Page</h1>

            {/* Форма для создания вакансии */}
            <h2 className="text-xl font-semibold mb-4">Create a Job</h2>
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

            <Divider />

            {/* Список вакансий */}
            <h2 className="text-xl font-semibold mb-4">Jobs</h2>
            {initialJobs.length > 0 ? (
                <ul className="space-y-4">
                    {initialJobs.map((job) => (
                        <li
                            key={job.id}
                            className="border border-gray-300 p-4 rounded-lg"
                        >
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

            <Divider />

            {/* Список работодателей */}
            <h2 className="text-xl font-semibold mb-4">Employers</h2>
            {employers.length > 0 ? (
                <ul className="space-y-4">
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

            <Divider />

            {/* Список тегов */}
            <h2 className="text-xl font-semibold mb-4">Tags</h2>
            {tags.length > 0 ? (
                <ul className="space-y-4">
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
