import PokedexIntegration from "./PokedexIntegration";
import PokemonResourceIntegration from "./resource/PokemonResourceIntegration";

export class PokedexIntegrationImpl implements PokedexIntegration {
    async findPokemonByName(name: string): Promise<PokemonResourceIntegration> {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => this.callToPokedex(res))
            .catch(error => new PokemonResourceIntegration());
    };

    private async callToPokedex(res: Response): Promise<PokemonResourceIntegration> {
        return res.json().then(data => this.getPokemonStats(data));
    }

    private getPokemonStats(data: any): PokemonResourceIntegration {
        const pokemon = new PokemonResourceIntegration();
        pokemon.name = data.name;
        pokemon.numberOfAbilities = data.abilities.length;
        pokemon.baseExperience = data.base_experience;
        pokemon.imageUrl = data.sprites.front_default;
        return pokemon;
    }
}