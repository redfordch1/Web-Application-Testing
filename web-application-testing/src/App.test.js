import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
});

test('both strike and ball are rendered', () => {
	const { getByTestId } = render(<App />);
	getByTestId(/ball__/i);
	getByTestId(/strike__/i);
});

test('all buttons are rendered', () => {
	const { getAllByTestId } = render(<App />);
	getAllByTestId(/_button_/i);
});
