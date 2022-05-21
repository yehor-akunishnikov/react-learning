import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {Character} from "../models";

export const characterApi = createApi({
    reducerPath: 'character-api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
    tagTypes: [],
    endpoints: (builder) => ({
        loadAll: builder.query({
            query: () => `character`,
            transformResponse: (response: any): Character[] => response.results,
        }),
    }),
});

export const {useLoadAllQuery} = characterApi;
