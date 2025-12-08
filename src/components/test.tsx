import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is your mutation file

interface TestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState } = useForm<TestForm>();
  const [createTest, { data }] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<TestForm> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: { testInput: data } });
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: true })}
            aria-required="true"
            aria-invalid={formState.errors.title ? 'true' : 'false'}
            className={`w-full p-2 border rounded ${formState.isSubmitted && formState.errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: true })}
            aria-required="true"
            aria-invalid={formState.errors.description ? 'true' : 'false'}
            rows={4}
            className={`w-full p-2 border rounded ${formState.isSubmitted && formState.errors.description ? 'border-red-500' : ''}`}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !formState.isValid}
          aria-disabled={loading || !formState.isValid ? 'true' : 'false'}
          className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is your mutation file

interface TestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState } = useForm<TestForm>();
  const [createTest, { data }] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<TestForm> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: { testInput: data } });
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: true })}
            aria-required="true"
            aria-invalid={formState.errors.title ? 'true' : 'false'}
            className={`w-full p-2 border rounded ${formState.isSubmitted && formState.errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            {...register('description', { required: true })}
            aria-required="true"
            aria-invalid={formState.errors.description ? 'true' : 'false'}
            rows={4}
            className={`w-full p-2 border rounded ${formState.isSubmitted && formState.errors.description ? 'border-red-500' : ''}`}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !formState.isValid}
          aria-disabled={loading || !formState.isValid ? 'true' : 'false'}
          className={`w-full p-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Loading...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;