import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      designArchitectures: [
        { id: '1', name: 'Architecture A' },
        { id: '2', name: 'Architecture B' }
      ]
    }
  })
}));

describe('Design Architecture Component Tests', () => {
  beforeEach(() => {
    render(<DesignArchitectureComponent />);
  });

  it('renders design architecture list on load', async () => {
    const architectures = await waitFor(() =>
      screen.getAllByRole('listitem')
    );
    expect(architectures).toHaveLength(2);
  });

  it('displays loading state while fetching data', () => {
    jest.clearAllMocks();
    render(<DesignArchitectureComponent />);
    const loadingIndicator = screen.getByText(/loading/i);
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('handles error during data fetch and displays message', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
    render(<DesignArchitectureComponent />);
    await waitFor(() =>
      expect(screen.getByText(/an error occurred/i)).toBeInTheDocument()
    );
  });

  it('allows user to select a design architecture', () => {
    const listItem = screen.getAllByRole('listitem')[0];
    fireEvent.click(listItem);
    expect(fetchData).toHaveBeenCalledWith('1');
  });

  it('ensures accessibility for all elements', () => {
    const listItems = screen.getAllByRole('listitem');
    listItems.forEach((item) => {
      expect(item).toHaveAttribute('tabindex', '0'); // Ensure focusable
      expect(item).toBeVisible(); // Ensure visible
    });
  });

  it('validates edge cases for empty data response', () => {
    (fetchData as jest.Mock).mockResolvedValue({ data: { designArchitectures: [] } });
    render(<DesignArchitectureComponent />);
    const noResultsMessage = screen.getByText(/no results found/i);
    expect(noResultsMessage).toBeInTheDocument();
  });

  it('validates edge cases for null response', () => {
    (fetchData as jest.Mock).mockResolvedValue({ data: null });
    render(<DesignArchitectureComponent />);
    const errorElement = screen.getByText(/an error occurred/i);
    expect(errorElement).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      designArchitectures: [
        { id: '1', name: 'Architecture A' },
        { id: '2', name: 'Architecture B' }
      ]
    }
  })
}));

describe('Design Architecture Component Tests', () => {
  beforeEach(() => {
    render(<DesignArchitectureComponent />);
  });

  it('renders design architecture list on load', async () => {
    const architectures = await waitFor(() =>
      screen.getAllByRole('listitem')
    );
    expect(architectures).toHaveLength(2);
  });

  it('displays loading state while fetching data', () => {
    jest.clearAllMocks();
    render(<DesignArchitectureComponent />);
    const loadingIndicator = screen.getByText(/loading/i);
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('handles error during data fetch and displays message', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
    render(<DesignArchitectureComponent />);
    await waitFor(() =>
      expect(screen.getByText(/an error occurred/i)).toBeInTheDocument()
    );
  });

  it('allows user to select a design architecture', () => {
    const listItem = screen.getAllByRole('listitem')[0];
    fireEvent.click(listItem);
    expect(fetchData).toHaveBeenCalledWith('1');
  });

  it('ensures accessibility for all elements', () => {
    const listItems = screen.getAllByRole('listitem');
    listItems.forEach((item) => {
      expect(item).toHaveAttribute('tabindex', '0'); // Ensure focusable
      expect(item).toBeVisible(); // Ensure visible
    });
  });

  it('validates edge cases for empty data response', () => {
    (fetchData as jest.Mock).mockResolvedValue({ data: { designArchitectures: [] } });
    render(<DesignArchitectureComponent />);
    const noResultsMessage = screen.getByText(/no results found/i);
    expect(noResultsMessage).toBeInTheDocument();
  });

  it('validates edge cases for null response', () => {
    (fetchData as jest.Mock).mockResolvedValue({ data: null });
    render(<DesignArchitectureComponent />);
    const errorElement = screen.getByText(/an error occurred/i);
    expect(errorElement).toBeInTheDocument();
  });
});