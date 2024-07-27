'use client';

import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import { Image, Loader2Icon } from 'lucide-react'; // Ensure Image is correctly imported or use <img> if not from lucide-react
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FORM_DATA {
    [key: string]: string; // Or use a more specific type if you know the form fields
}

interface PROPS {
    SelectedTemplate?: TEMPLATE;
    userFormInput: (formData: FORM_DATA) => void;
    loading: boolean;
}

const FormSection = ({ SelectedTemplate, userFormInput, loading }: PROPS) => {
    const [formData, setFormData] = useState<FORM_DATA>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        userFormInput(formData);
    };

    return (
        <div className='p-5 bg-white shadow-md border rounded-lg'>
            <img
                width={70}
                height={70}
                src={SelectedTemplate?.icon}
                alt='icon'
            />
            <h2 className='font-bold text-2xl mb-2 text-blue-700'>{SelectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{SelectedTemplate?.desc}</p>
            <form action="" className='mt-6' onSubmit={onSubmit}>
                {SelectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='my-2 flex flex-col gap-2 mb-2'>
                        <label className='font-bold'>{item.label}</label>
                        {item.field === 'input' ? (
                            <Input
                                name={item.name}
                                required={item.required}
                                onChange={handleInputChange}
                            />
                        ) : item.field === 'textarea' ? (
                            <Textarea
                                name={item.name}
                                required={item.required}
                                onChange={handleInputChange}
                            />
                        ) : null}
                    </div>
                ))}
                <Button disabled={loading} type='submit' className='w-full py-6'>
                    {loading && <Loader2Icon className='animate-spin' />}
                    Generate Content
                </Button>
            </form>
        </div>
    );
};

export default FormSection;
