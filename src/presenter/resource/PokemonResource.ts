export default class PokemonResource {
    name: string;
    numberOfAbilities?: number;
    baseExperience?: number;
    imageUrl?: string;

    constructor(name: string = '', numberOfAbilities: number = 0, baseExperience: number = 0, imageUrl: string = '') {
        this.name = name;
        this.numberOfAbilities = numberOfAbilities;
        this.baseExperience = baseExperience;
        this.imageUrl = imageUrl;
    }

}