import {createEntityAdapter, createSlice, EntityState} from '@reduxjs/toolkit';

import * as fromReducer from './reducers';
import {FeatureState} from "../../../store";
import {loadSuccess} from "./thunks";
import {Character} from "../../../models";

export interface CharactersState extends EntityState<Character>{ }

export const key = 'characters';

export const adapter = createEntityAdapter<Character>();

export const initialState = adapter.getInitialState();

export const slice = createSlice({
    name: key,
    initialState,
    reducers: {},
    extraReducers: {
        [loadSuccess]: fromReducer.reducer,
    },
})

export const selector = (featureState: FeatureState): CharactersState => featureState[key];
export const selectors = adapter.getSelectors();

export const reducer = slice.reducer;