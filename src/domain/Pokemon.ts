export default class Pokemon {
    name: string;
    numberOfAbilities: number;
    baseExperience: number;
    imageUrl: string;

    constructor(name:string){
        this.name = name;
        this.numberOfAbilities = 0;
        this.baseExperience = 0;
        this.imageUrl = '';
    }
}