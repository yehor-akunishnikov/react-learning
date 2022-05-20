import {http} from "./characters.rest-config";
import {Character} from "../models";

export const getAll = (): Promise<Character[]> => http.get('')
    .then(res => res.data.results);