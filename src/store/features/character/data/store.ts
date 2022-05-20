import {combineReducers} from '@reduxjs/toolkit';

import * as fromCharactersReducer from './reducers/characters.reducer';
import * as fromCharactersLoadingReducer from './reducers/characters-loading-state.reducer';
import {AppState} from "../../../store";

export interface FeatureState {
    [fromCharactersReducer.key]: fromCharactersReducer.State;
    [fromCharactersLoadingReducer.key]: fromCharactersLoadingReducer.State;
}

export const featureKey = '[DATA LAYER] CharacterCard';

export const featureReducer = combineReducers({
    [fromCharactersReducer.key]: fromCharactersReducer.reducer,
    [fromCharactersLoadingReducer.key]: fromCharactersLoadingReducer.reducer,
});

/*
* SELECTORS
* */
export const featureSelector = (state: AppState): FeatureState => state[featureKey];

export const charactersSelectors = fromCharactersReducer.adapter.getSelectors();

export const charactersSelector = (state: AppState): fromCharactersReducer.State =>
    featureSelector(state)[fromCharactersReducer.key];

export const charactersLoadingSelector = (state: AppState): fromCharactersLoadingReducer.State =>
    featureSelector(state)[fromCharactersLoadingReducer.key];
