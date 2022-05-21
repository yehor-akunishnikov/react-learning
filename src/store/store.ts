import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {characterApi} from './features/character';

const rootReducer = combineReducers({
    [characterApi.reducerPath]: characterApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware),
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
