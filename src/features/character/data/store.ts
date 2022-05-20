import {combineReducers} from '@reduxjs/toolkit';

import * as fromCharactersReducer from './reducers/characters.reducer';
import * as fromCharactersLoadingReducer from './reducers/characters-loading-state.reducer';
import {AppState} from "../../../store/store";

export interface FeatureState {
    [fromCharactersReducer.key]: fromCharactersReducer.State;
}

export const featureKey = '[DATA LAYER] Character';

export const featureReducer = combineReducers({
    [fromCharactersReducer.key]: fromCharactersReducer.reducer,
    [fromCharactersLoadingReducer.key]: fromCharactersLoadingReducer.reducer,
});

/*
* SELECTORS
* */
export const featureSelector = (state: AppState): FeatureState => state[featureKey];

export const charactersSelectors = fromCharactersReducer.adapter.getSelectors();
export const charactersSelector = (state: AppState): fromCharactersReducer.State => {
    return featureSelector(state)[fromCharactersReducer.key];
}
