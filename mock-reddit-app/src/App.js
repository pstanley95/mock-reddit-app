import React from 'react';
import Header from './features/header/Header';
import './App.css';
import ArticleList from './features/articles/ArticlesList';
import { loadArticles } from './features/articles/articlesSlice';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const mockArticles = [
  { id: 1, title: 'Article 1', content: 'Content of Article 1', initialVotes: 10},
  { id: 2, title: 'Article 2', content: 'Content of Article 2', initialVotes: -2},
  { id: 3, title: 'Article 3', content: 'Content of Article 3', initialVotes: 1000},
  { id: 1, title: 'Article 1', content: 'Content of Article 1', initialVotes: 10},
  { id: 2, title: 'Article 2', content: 'Content of Article 2', initialVotes: -2},
  { id: 3, title: 'Article 3', content: 'Content of Article 3', initialVotes: 1000}
]

/* const Root = () => {
  return (
    <div>
      <Header />
      <ArticleList articles={loadArticles()} />
    </div>
  )
}

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root />}>
    <Route path="/:articleId" element={<ArticleList articles={[]}/>} />
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  );
}*/

function App() {
  return (
    <div>
      <Header />
      <ArticleList articles = {useDispatch(loadArticles)} />
    </div>
  )
}

export default App;
