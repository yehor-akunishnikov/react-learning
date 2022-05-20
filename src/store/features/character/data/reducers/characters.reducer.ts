import {ActionReducerMapBuilder, createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";

import {Character} from "../../models";
import {loadSuccess} from "../actions";

export interface State extends EntityState<Character> { }

export const key = 'characters';

export const adapter = createEntityAdapter<Character>();

export const initialState = adapter.getInitialState();

export const slice = createSlice({
    name: key,
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<State>) => builder
        .addCase(loadSuccess, (state, {payload}) => {
            adapter.setAll(state, payload);
        })
});

export const reducer = slice.reducer;