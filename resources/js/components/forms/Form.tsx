import React from 'react';
import { useForm } from '@inertiajs/react';

interface FormProps<T extends Record<string, any>> {
    children: (form: ReturnType<typeof useForm<T>>) => React.ReactNode;
    action: string;
    method?: 'get' | 'post' | 'put' | 'delete';
    initialValues?: T;
    onSubmit?: (form: ReturnType<typeof useForm<T>>) => void;
}

const Form = <T extends Record<string, any>>({
                                                 children,
                                                 action,
                                                 method = 'get',
                                                 initialValues = {} as T,
                                                 onSubmit,
                                             }: FormProps<T>) => {
    const form = useForm<T>(initialValues);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(form);
        } else if (method === 'get') {
            form.get(action, { preserveState: true });
        } else {
            form.post(action, { preserveState: true });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
            method={method === 'get' ? 'GET' : 'POST'}
        >
            {children(form)}
        </form>
    );
};

export default Form;
