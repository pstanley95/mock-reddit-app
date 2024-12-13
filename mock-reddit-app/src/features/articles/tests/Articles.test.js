import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ArticlesList from '../ArticlesList'
import userEvent from '@testing-library/user-event'

const mockArticles = [
    { id: 1, title: 'Article 1', content: 'Content of Article 1', initialVotes: 10},
    { id: 2, title: 'Article 2', content: 'Content of Article 2', initialVotes: -2},
    { id: 3, title: 'Article 3', content: 'Content of Article 3', initalVotes: 1000},
]

test('renders a message when no articles are provided', () => {
    render(<ArticlesList articles={[]}/>);
    expect(screen.getByText('No articles available')).toBeInTheDocument();
})

test('renders articles', () => {
    render(<ArticlesList articles={mockArticles} />);
    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Article 2')).toBeInTheDocument();
    expect(screen.getByText('Content of Article 1')).toBeInTheDocument();
    expect(screen.getByText('Content of Article 2')).toBeInTheDocument();
})


test('article votes change with upvote or downvote', async () => {
    const mockArticles = [{
        id: 1, title: 'Title', content: '', initialVotes: 10
    }]
    render(<ArticlesList articles={mockArticles} />);

    const initialVoteCountElement = screen.getByText('10');
    expect(initialVoteCountElement).toBeInTheDocument();

    const upvote = screen.getByRole('upvote');
    const downvote = screen.getByRole('downvote');

    userEvent.click(upvote);
    
    await waitFor(() => {
        const voteCountElement = screen.getByText(11);
        expect(voteCountElement).toBeInTheDocument();
    })
    
    userEvent.click(downvote);
    
    await waitFor(() => {
        const newVoteCountElement = screen.getByText(10);
        expect(newVoteCountElement).toBeInTheDocument()
    })
})