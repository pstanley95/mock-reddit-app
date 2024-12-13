import React from 'react';
import Header from './features/header/Header';
import './App.css';
import ArticleList from './features/articles/ArticlesList';

const mockArticles = [
  { id: 1, title: 'Article 1', content: 'Content of Article 1', initialVotes: 10},
  { id: 2, title: 'Article 2', content: 'Content of Article 2', initialVotes: -2},
  { id: 3, title: 'Article 3', content: 'Content of Article 3', initialVotes: 1000},
  { id: 1, title: 'Article 1', content: 'Content of Article 1', initialVotes: 10},
  { id: 2, title: 'Article 2', content: 'Content of Article 2', initialVotes: -2},
  { id: 3, title: 'Article 3', content: 'Content of Article 3', initialVotes: 1000}
]
function App() {
  return (
    <div className="App">
      <Header />
      <ArticleList articles={mockArticles}/>
    </div>
  );
}

export default App;
