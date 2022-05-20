import {ActionReducerMapBuilder, createSlice, isAnyOf} from "@reduxjs/toolkit";

import {load, loadFailed, loadSuccess} from "../actions";

export interface State {
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
    extraReducers: (builder: ActionReducerMapBuilder<State>) => builder
        .addCase(load.type, (state): State => {
            return {...state, loadInProgress: true};
        })
        .addMatcher(isAnyOf(loadSuccess, loadFailed), (state): State => {
            return {...state, loadInProgress: false};
        }),
});

export const reducer = slice.reducer;