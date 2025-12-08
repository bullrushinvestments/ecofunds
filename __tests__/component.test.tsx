import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com'
    }
  })
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays user data after fetching', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/John Doe/));
    expect(screen.getByText(/john.doe@example.com/)).toBeInTheDocument();
  });

  test('handles error when fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Fetching data.../));
    expect(screen.getByRole('alert')).toHaveTextContent(/Failed to fetch data:/);
  });

  test('user interaction triggers data fetching', () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /Fetch Data/i }));
    expect(fetchData).toHaveBeenCalled();
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /Fetch Data/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'fetch data');
    fireEvent.click(button);
  });

  test('renders no data message when there is no user data', () => {
    (fetchData as jest.Mock).mockResolvedValue({ data: null });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });

  test('handles edge cases for invalid input', () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.change(getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(getByRole('button', { name: /Fetch Data/i }));
    expect(screen.getByText(/Invalid input provided:/)).toBeInTheDocument();
  });

  test('component is keyboard navigable and focusable elements are correct', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /Fetch Data/i });
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(fetchData).toHaveBeenCalled();
  });

  test('component is compliant with WCAG guidelines', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    expect(container).toHaveAttribute('role', 'region');
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com'
    }
  })
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays user data after fetching', async () => {
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/John Doe/));
    expect(screen.getByText(/john.doe@example.com/)).toBeInTheDocument();
  });

  test('handles error when fetching fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/Fetching data.../));
    expect(screen.getByRole('alert')).toHaveTextContent(/Failed to fetch data:/);
  });

  test('user interaction triggers data fetching', () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.click(getByRole('button', { name: /Fetch Data/i }));
    expect(fetchData).toHaveBeenCalled();
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /Fetch Data/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'fetch data');
    fireEvent.click(button);
  });

  test('renders no data message when there is no user data', () => {
    (fetchData as jest.Mock).mockResolvedValue({ data: null });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });

  test('handles edge cases for invalid input', () => {
    const { getByRole } = render(<CoreFunctionalityComponent />);
    fireEvent.change(getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(getByRole('button', { name: /Fetch Data/i }));
    expect(screen.getByText(/Invalid input provided:/)).toBeInTheDocument();
  });

  test('component is keyboard navigable and focusable elements are correct', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /Fetch Data/i });
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(fetchData).toHaveBeenCalled();
  });

  test('component is compliant with WCAG guidelines', () => {
    const { container } = render(<CoreFunctionalityComponent />);
    expect(container).toHaveAttribute('role', 'region');
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});