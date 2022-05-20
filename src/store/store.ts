import {configureStore} from '@reduxjs/toolkit';

import * as fromCharacter from "../features/characters/data/store";

export interface AppState {
    [fromCharacter.featureKey]: fromCharacter.State;
}

export const store = configureStore({
    reducer: {
        [fromCharacter.featureKey]: fromCharacter.featureReducer,
    }
})

export type AppDispatch = typeof store.dispatch;