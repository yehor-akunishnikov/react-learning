export interface Character {
    created: string;
    episode: string[];
    gender: GENDER;
    id: number;
    image: string;
    location: CharacterLocation;
    name: string;
    origin: CharacterLocation;
    species: string;
    status: STATUS;
    type: string;
    url: string;
}

export enum GENDER {
    UNKNOWN = "unknown",
    FEMALE = "Female",
    MALE = "Male",
    GENDERLESS = "Genderless",
}

export interface CharacterLocation {
    name: string;
    url: string;
}

export enum STATUS {
    DEAD = "Dead",
    ALIVE = "Alive",
    UNKNOWN = "unknown",
}