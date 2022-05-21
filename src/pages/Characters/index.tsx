import React from "react";

import {useLoadAllQuery} from "../../store/features/character";

import {CharacterCard} from '../../components/CharacterCard';

export const Characters = () => {
    const {data = [], isLoading} = useLoadAllQuery(null);

    const cards = !isLoading ? data.map(character => (
        <CharacterCard
            data={character}
            key={character.id}/>
    )) : (<div>Loading...</div>);

    return (<>
        {cards}
    </>);
}