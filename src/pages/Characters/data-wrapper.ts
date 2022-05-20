import {connect} from "react-redux";

import {charactersSelector, charactersSelectors} from "../../store/features/character/data/store";
import {Character} from "../../store/features/character/models";
import {AppState} from "../../store/store";

import {Characters} from "./index";

export interface MappedProps {
    characters: Character[];
}

const mapStateToProps = (state: AppState): MappedProps => ({
    characters: charactersSelectors.selectAll(charactersSelector(state)),
});

export const CharactersWrapper = connect(mapStateToProps)(Characters);