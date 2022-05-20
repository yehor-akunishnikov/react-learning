import {combineReducers} from "redux";

import * as fromCharacters from "./slices/characters/data/slice";
import {AppState} from "../../store/store";

export const featureKey = '[DATA LAYER] character';

export interface FeatureState {
    [fromCharacters.key]: fromCharacters.CharactersState;
}

export const featureReducer = combineReducers({
    [fromCharacters.key]: fromCharacters.reducer,
});

export const featureSelector = (appState: AppState): FeatureState => appState[featureKey];
