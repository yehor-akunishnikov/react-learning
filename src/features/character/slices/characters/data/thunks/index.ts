import {createAsyncThunk} from "@reduxjs/toolkit";

import {Character} from "../../../../models";

export const loadThunk = createAsyncThunk<Character[]>(
    'character/loadAll',
    (thunkAPI) => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(data => data.json())
            .then(data => data.results);
    }
);

export const load = loadThunk.pending.type;
export const loadSuccess = loadThunk.fulfilled.type;
export const loadFailed = loadThunk.rejected.type;