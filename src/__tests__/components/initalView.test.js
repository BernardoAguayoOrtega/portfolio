/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { queryByAttribute, render, screen } from '@testing-library/react';
import InitialView from '../../components/InitialView/index';

const getByClassName = queryByAttribute.bind(null, 'class');
const getById = queryByAttribute.bind(null, 'id');

describe('<InitialView />', () => {
  it('should render initialView container', () => {
    render(<InitialView />);
  });

  it('should render content container', () => {
    const { container } = render(<InitialView />);

    const content = getByClassName(container, 'content');

    expect(content).toBeInTheDocument();
  });

  it('should render content of content container', () => {
    const { container } = render(<InitialView />);

    const icon = getById(container, 'dev');

    const name = screen.getByText(/bernardo aguayo/i);

    const base = getByClassName(container, 'base');

    expect(icon).toBeInTheDocument();

    expect(name).toBeInTheDocument();

    expect(base).toBeInTheDocument();
  });

  it('after 2 seconds actual text should change', () => {
    jest.useFakeTimers();
  });
});
