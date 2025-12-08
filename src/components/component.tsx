import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-spec', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Business Specification</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'This field is required' })}
            className={clsx(
              "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-opacity-20",
              { "border-red-500": errors.name }
            )}
          />
          <p className="mt-1 text-sm text-red-600">{errors.name?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            rows={3}
            className={clsx(
              "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-opacity-20",
              { "border-red-500": errors.description }
            )}
          />
          <p className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
          <textarea
            id="features"
            {...register('features', { required: 'This field is required' })}
            rows={3}
            className={clsx(
              "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-opacity-20",
              { "border-red-500": errors.features }
            )}
          />
          <p className="mt-1 text-sm text-red-600">{errors.features?.message}</p>
        </div>
        <button
          type="submit"
          className={clsx(
            "inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            { "cursor-not-allowed opacity-50": loading }
          )}
          disabled={loading}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecForm {
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-spec', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Business Specification</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'This field is required' })}
            className={clsx(
              "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-opacity-20",
              { "border-red-500": errors.name }
            )}
          />
          <p className="mt-1 text-sm text-red-600">{errors.name?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'This field is required' })}
            rows={3}
            className={clsx(
              "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-opacity-20",
              { "border-red-500": errors.description }
            )}
          />
          <p className="mt-1 text-sm text-red-600">{errors.description?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
          <textarea
            id="features"
            {...register('features', { required: 'This field is required' })}
            rows={3}
            className={clsx(
              "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-opacity-20",
              { "border-red-500": errors.features }
            )}
          />
          <p className="mt-1 text-sm text-red-600">{errors.features?.message}</p>
        </div>
        <button
          type="submit"
          className={clsx(
            "inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            { "cursor-not-allowed opacity-50": loading }
          )}
          disabled={loading}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;