/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../../components/App/index';

it('renders without crashing', () => {
  render(<App />);

  expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();
});
