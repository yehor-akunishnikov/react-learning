import {load, loadFailed, loadSuccess} from "../actions";

import {ThunkAction, ThunkDispatch} from "redux-thunk";

import {Action} from "redux";

import {AppState} from "../../../../store";
import {getAll} from "../../api/characters-rest.service";

export const loadAll = (): ThunkAction<void, AppState, any, Action> => {
    return (dispatch: ThunkDispatch<AppState, void, Action>) => {
        dispatch(load());
        getAll()
            .then(characters => dispatch(loadSuccess(characters)))
            .catch(error => dispatch(loadFailed(error.key)));
    }
};
