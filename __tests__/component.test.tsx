import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalHook: jest.fn(() => ({ data: [], loading: false })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component without crashing', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ error: 'Failed to fetch data', loading: false }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('displays no items message when there is no data', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ data: [], loading: false }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no items available/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', async () => {
    const mockFn = jest.fn();
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ data: [{ id: '1' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/click me/i));
    await waitFor(() => expect(mockFn).toHaveBeenCalled());
  });

  test('accessibility features are properly implemented', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ data: [{ id: '1' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', /click me/i);
  });

  test('renders loading state when fetching data', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ loading: true }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledWith
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./SomeExternalDependency', () => ({
  useSomeExternalHook: jest.fn(() => ({ data: [], loading: false })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component without crashing', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ error: 'Failed to fetch data', loading: false }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('displays no items message when there is no data', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ data: [], loading: false }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/no items available/i)).toBeInTheDocument());
  });

  test('handles user interaction with buttons', async () => {
    const mockFn = jest.fn();
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ data: [{ id: '1' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/click me/i));
    await waitFor(() => expect(mockFn).toHaveBeenCalled());
  });

  test('accessibility features are properly implemented', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ data: [{ id: '1' }], loading: false }));
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', /click me/i);
  });

  test('renders loading state when fetching data', async () => {
    (useSomeExternalHook as jest.Mock).mockImplementation(() => ({ loading: true }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });
});