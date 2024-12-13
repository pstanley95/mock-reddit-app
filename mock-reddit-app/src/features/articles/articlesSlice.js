import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
    name: 'articles',
    initialState: [],
    reducers: {
        loadArticles: (state, action) => {
            
        }
    }
})

export const { selectArticles } = (state) => state;
export const { loadArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
