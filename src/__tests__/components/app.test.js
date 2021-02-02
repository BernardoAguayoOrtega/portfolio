/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import App from '../../components/App/index';

it('renders without crashing', () => {
  render(<App />);
});
