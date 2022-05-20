import {CaseReducer, EntityState} from "@reduxjs/toolkit";

import {Character} from "../../../../models";
import {adapter} from "../slice";

export const reducer: CaseReducer<EntityState<Character>> = (state, {payload}): void => {
    adapter.setAll(state, payload);
}