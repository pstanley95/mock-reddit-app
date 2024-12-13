import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchValue: ''
    },
    reducers: {
        updateSearch(state, action) {
            state.searchValue = action.payload;
            console.log('Successfully updated search in the store to:')
            console.log(state.searchValue || 'Nothing searched');
        }
    }
})

export const selectSearchValue = (state) => state.search.searchValue;
export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;