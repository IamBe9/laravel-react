import React from 'react';
import Layout from '../layouts/Layout';
import PageHeading from '../components/PageHeading';
import Input from '../components/forms/Input';
import Select from '../components/forms/Select';
import Checkbox from '../components/forms/Checkbox';
import Button from '../components/forms/Button';
import { useForm } from '@inertiajs/react';

const Create: React.FC<{}> = () => {
    const { data, setData, post, processing, errors } = useForm<{
        title: string;
        salary: string;
        location: string;
        schedule: string;
        url: string;
        featured: boolean;
        tags: string;
    }>({
        title: '',
        salary: '',
        location: '',
        schedule: '',
        url: '',
        featured: false,
        tags: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/jobs', {
            onSuccess: () => {
                window.location.href = '/jobs';
            },
        });
    };

    return (
        <Layout>
            <PageHeading>New Job</PageHeading>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <Input
                    label="Title"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="CEO"
                    error={errors.title}
                />
                <Input
                    label="Salary"
                    name="salary"
                    value={data.salary}
                    onChange={(e) => setData('salary', e.target.value)}
                    placeholder="$90,000 USD"
                    error={errors.salary}
                />
                <Input
                    label="Location"
                    name="location"
                    value={data.location}
                    onChange={(e) => setData('location', e.target.value)}
                    placeholder="Winter Park, Florida"
                    error={errors.location}
                />
                <Select
                    label="Schedule"
                    name="schedule"
                    value={data.schedule}
                    onChange={(e) => setData('schedule', e.target.value)}
                    error={errors.schedule}
                >
                    <option value="">Select Schedule</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Full Time">Full Time</option>
                </Select>
                <Input
                    label="URL"
                    name="url"
                    value={data.url}
                    onChange={(e) => setData('url', e.target.value)}
                    placeholder="https://acme.com/jobs/ceo-wanted"
                    error={errors.url}
                />
                <Checkbox
                    label="Feature (Costs Extra)"
                    name="featured"
                    checked={data.featured}
                    onChange={(e) => setData('featured', e.target.checked)}
                    error={errors.featured}
                />
                <div className="border-t border-white/10 my-4" />
                <Input
                    label="Tags (comma separated)"
                    name="tags"
                    value={data.tags}
                    onChange={(e) => setData('tags', e.target.value)}
                    placeholder="laracasts, video, education"
                    error={errors.tags}
                />
                <Button type="submit" disabled={processing}>
                    Publish
                </Button>
            </form>
        </Layout>
    );
};

export default Create;
