import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, Grid } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      features: []
    }
  });

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-spec', data);
      reset();
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Name"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                aria-label="business-name"
                inputMode="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="description"
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Description"
                fullWidth
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
                aria-label="business-description"
                inputMode="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="features"
            control={control}
            rules={{ required: 'At least one feature is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Features (comma separated)"
                fullWidth
                multiline
                rows={4}
                error={!!errors.features}
                helperText={errors.features?.message}
                aria-label="business-features"
                inputMode="text"
              />
            )}
          />
        </Grid>
      </Grid>
      <Box mt={3}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          aria-label="create-business-specification"
        >
          {loading ? <CircularProgress size={24} /> : 'Create Business Specification'}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, Grid } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      features: []
    }
  });

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-spec', data);
      reset();
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Name"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                aria-label="business-name"
                inputMode="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="description"
            control={control}
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Business Description"
                fullWidth
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
                aria-label="business-description"
                inputMode="text"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="features"
            control={control}
            rules={{ required: 'At least one feature is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Features (comma separated)"
                fullWidth
                multiline
                rows={4}
                error={!!errors.features}
                helperText={errors.features?.message}
                aria-label="business-features"
                inputMode="text"
              />
            )}
          />
        </Grid>
      </Grid>
      <Box mt={3}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          aria-label="create-business-specification"
        >
          {loading ? <CircularProgress size={24} /> : 'Create Business Specification'}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;