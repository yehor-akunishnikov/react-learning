import React from "react";

import {Card} from "react-bootstrap";

import {Character} from "../../store/features/character";

export interface Props {
    data: Character;
}

export const CharacterCard = (props: Props) => {
    return (<Card>
        <Card.Body>{props.data.name}</Card.Body>
    </Card>);
}