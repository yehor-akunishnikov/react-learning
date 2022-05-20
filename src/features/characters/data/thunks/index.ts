import {createAsyncThunk} from "@reduxjs/toolkit";

import {Character} from "../../models";

export const load = createAsyncThunk<Character[]>(
    'characters/loadAll',
    (thunkAPI) => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(data => data.json())
            .then(data => data.results);
    }
);

export const loadSuccess = load.fulfilled.type;