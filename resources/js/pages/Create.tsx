import React from 'react';
import Layout from '../layouts/Layout';
import PageHeading from '../components/PageHeading';
import Input from '../components/forms/Input';
import { useForm } from '@inertiajs/react';

interface CreateProps {}

const Create: React.FC<CreateProps> = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        salary: '',
        location: '',
        description: '',
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
            <PageHeading>Create a New Job</PageHeading>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <Input
                    label="Title"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    error={errors.title}
                />
                <Input
                    label="Salary"
                    name="salary"
                    value={data.salary}
                    onChange={(e) => setData('salary', e.target.value)}
                    error={errors.salary}
                />
                <Input
                    label="Location"
                    name="location"
                    value={data.location}
                    onChange={(e) => setData('location', e.target.value)}
                    error={errors.location}
                />
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-md px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={5}
                    />
                    {errors.description && (
                        <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 disabled:bg-gray-400"
                >
                    Create Job
                </button>
            </form>
        </Layout>
    );
};

export default Create;
