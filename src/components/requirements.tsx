import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Requirement[]>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleFormSubmit: SubmitHandler<Requirement[]> = (data) => {
    setLoading(true);
    onSubmit(data)
      .then(() => {
        reset();
        toast({
          title: 'Requirements submitted successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Error submitting requirements:', error);
        toast({
          title: 'Failed to submit requirements',
          description: error.message || 'An unexpected error occurred.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {errors && Object.keys(errors).length > 0 ? (
        <div role="alert" aria-live="polite">
          Please fix the errors below before submitting.
        </div>
      ) : null}
      
      <label htmlFor="name">Name</label>
      <input {...register('name', { required: 'This field is required' })} id="name" placeholder="Enter name" />

      <label htmlFor="description">Description</label>
      <textarea {...register('description')} id="description" placeholder="Describe the requirement"></textarea>

      <label htmlFor="priority">Priority</label>
      <select {...register('priority', { required: 'This field is required' })} id="priority">
        <option value="">Select priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface Requirement {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface GatherRequirementsFormProps {
  onSubmit: (requirements: Requirement[]) => void;
}

const GatherRequirements: React.FC<GatherRequirementsFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Requirement[]>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleFormSubmit: SubmitHandler<Requirement[]> = (data) => {
    setLoading(true);
    onSubmit(data)
      .then(() => {
        reset();
        toast({
          title: 'Requirements submitted successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Error submitting requirements:', error);
        toast({
          title: 'Failed to submit requirements',
          description: error.message || 'An unexpected error occurred.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {errors && Object.keys(errors).length > 0 ? (
        <div role="alert" aria-live="polite">
          Please fix the errors below before submitting.
        </div>
      ) : null}
      
      <label htmlFor="name">Name</label>
      <input {...register('name', { required: 'This field is required' })} id="name" placeholder="Enter name" />

      <label htmlFor="description">Description</label>
      <textarea {...register('description')} id="description" placeholder="Describe the requirement"></textarea>

      <label htmlFor="priority">Priority</label>
      <select {...register('priority', { required: 'This field is required' })} id="priority">
        <option value="">Select priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;