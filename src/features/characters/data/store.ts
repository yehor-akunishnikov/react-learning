import {createEntityAdapter, createSlice, EntityState} from '@reduxjs/toolkit';

import {AppState} from "../../../store/store";
import {Character} from "../models";
import {loadSuccess} from "./thunks";

export interface State extends EntityState<Character> { }

export const featureKey = '[DATA LAYER] character';

export const adapter = createEntityAdapter<Character>();

export const initialState = adapter.getInitialState();

export const store = createSlice({
    name: featureKey,
    initialState,
    reducers: {},
    extraReducers: {
        [loadSuccess]: (state, {payload}) => {
            adapter.setAll(state, payload);
        }
    },
})

export const featureSelector = (state: AppState): State => state[featureKey];

export const characterSelectors = adapter.getSelectors();

export const featureReducer = store.reducer;