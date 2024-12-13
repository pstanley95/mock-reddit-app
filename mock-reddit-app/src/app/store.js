import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    search: searchReducer
  },
}); 
