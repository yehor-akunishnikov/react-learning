import {load, loadFailed, loadSuccess} from "../actions";

import {ThunkAction, ThunkDispatch} from "redux-thunk";

import {Action} from "redux";

import {AppState} from "../../../../store/store";

export const loadAll = (): ThunkAction<void, AppState, any, Action> => {
    return (dispatch: ThunkDispatch<AppState, void, Action>) => {
        dispatch(load());
        fetch('https://rickandmortyapi.com/api/character')
            .then(data => data.json())
            .then(data => dispatch(loadSuccess(data.results)))
            .catch(error => dispatch(loadFailed(error)));
    }
};
