import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../SearchBar'
import userEvent from '@testing-library/user-event'

const mockArticles = [
    { id: 1, title: 'Article 1', content: 'Content of Article 1', initialVotes: 10},
    { id: 2, title: 'Article 2', content: 'Content of Article 2', initialVotes: -2},
    { id: 3, title: 'Article 3', content: 'Content of Article 3', initalVotes: 1000},
]

test('renders correctly', () => {
    const { asFragment } = render(<SearchBar />);
    expect(asFragment()).toMatchSnapshot();
})

test('updates value when values are typed in', () => {
    render(<SearchBar value={''} />);
    
}