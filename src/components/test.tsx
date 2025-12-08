import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { TestType } from './types/TestType';
import { LoadingButton } from './components/LoadingButton';

interface WriteTestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [createTest] = useMutation(CREATE_TEST, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          tests(existingTests = []) {
            return existingTests.concat(data?.createTest);
          },
        },
      });
    },
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<WriteTestForm>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: WriteTestForm) => {
    try {
      setLoading(true);
      await createTest({ variables: { input: data } });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Test title"
            {...register('title', { required: 'Title is required' })}
            aria-label="test-title-input"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Test description"
            {...register('description', { required: 'Description is required' })}
            aria-label="test-description-input"
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
          )}
        </div>
        <LoadingButton loading={loading} type="submit" aria-label="create-test-button">
          Create Test
        </LoadingButton>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { TestType } from './types/TestType';
import { LoadingButton } from './components/LoadingButton';

interface WriteTestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [createTest] = useMutation(CREATE_TEST, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          tests(existingTests = []) {
            return existingTests.concat(data?.createTest);
          },
        },
      });
    },
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<WriteTestForm>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: WriteTestForm) => {
    try {
      setLoading(true);
      await createTest({ variables: { input: data } });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Test title"
            {...register('title', { required: 'Title is required' })}
            aria-label="test-title-input"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Test description"
            {...register('description', { required: 'Description is required' })}
            aria-label="test-description-input"
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
          )}
        </div>
        <LoadingButton loading={loading} type="submit" aria-label="create-test-button">
          Create Test
        </LoadingButton>
      </form>
    </div>
  );
};

export default WriteTests;