import {ActionReducerMapBuilder, createSlice, isAnyOf} from "@reduxjs/toolkit";

import {load, loadFailed, loadSuccess} from "../actions";

export interface LoadingState {
    loadInProgress: boolean,
}

export const key = 'characters-loading';

export const initialState = {
    loadInProgress: true,
};

export const slice = createSlice({
    name: key,
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<LoadingState>) => builder
        .addCase(load.type, (state): LoadingState => {
            return {...state, loadInProgress: true};
        })
        .addMatcher(isAnyOf(loadSuccess, loadFailed), (state): LoadingState => {
            return {...state, loadInProgress: false};
        }),
});

export const reducer = slice.reducer;