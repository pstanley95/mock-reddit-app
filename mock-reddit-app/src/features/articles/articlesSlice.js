import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loadArticles = createAsyncThunk(
    'articles/loadArticles',
    async () => {
        const redditURL = 'https://www.reddit.com/r/popular.json';
        const response = await fetch(redditURL, {
            type: 'GET'
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const rawArticles = jsonResponse.data.children;
            const articlesTitleAndContentOnly = [];
            rawArticles.map((rawArticle) => articlesTitleAndContentOnly.push({
                title: rawArticle.data.title,
                content: rawArticle.data.selftext,
                initialVotes: rawArticle.data.score,
                thumbnail: rawArticle.data.thumbnail
            }))
            return articlesTitleAndContentOnly;
        }
    }
)

const articlesSlice = createSlice({
    name: 'articles',

    initialState: {
        articles: [],
        isLoading: false,
        hasError: false
    },

    reducers: {
    },
    extraReducers(builder) {
            builder
            .addCase(loadArticles.pending, (state, action) => {
                console.log('Loading articles');
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadArticles.fulfilled, (state, action) => {
                console.log('Successfully retrieved articles;')
                state.isLoading = false;
                state.hasError = false;
                state.articles = action.payload;
                console.log(state.articles);
            })
            .addCase(loadArticles.rejected, (state, action) => {
                console.log('Failed to retrieve articles');
                state.isLoading = false;
                state.hasError = false;
                state.articles = [];
            })
        }
})

export const selectArticles = (state) => state.articles.articles;
export { loadArticles };
export default articlesSlice.reducer;