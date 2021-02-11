/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../../components/App/index';

describe('<App />', () => {
  it('should render the app container', () => {
    render(<App />);
  });

  it('should there a main container', () => {
    render(<App />);

    const container = screen.getByRole('main');

    expect(container).toHaveClass('container');
  });

  it('should container have initial view', () => {
    render(<App />);

    const container = screen.getByRole('main');

    const initialView = getByTestId(container, 'initialView');

    expect(container).toContainElement(initialView);
  });
});
