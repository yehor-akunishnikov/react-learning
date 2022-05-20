import {createAction} from "@reduxjs/toolkit";

import {AxiosError} from "axios";

import {Character} from "../../models";

export const load = createAction(
    '[CHARACTERS] Load',
);
export const loadSuccess = createAction(
    '[CHARACTERS] Load Success',
    (characters: Character[]) => ({payload: characters}),
);
export const loadFailed = createAction(
    '[CHARACTERS] Load Failed',
    (axiosError: AxiosError) => ({payload: axiosError}),
);