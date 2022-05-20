import React from "react";

import {MappedProps} from "./data-wrapper";
import {CharacterCard} from "../../components/CharacterCard";

export const Characters = (props: MappedProps) => {
    const characters = props.characters.map(character => {
        return (<CharacterCard data={character} key={character.id}></CharacterCard>)
    });
    return (<>
        {characters}
    </>);
}