import PokemonResourceIntegration from "./resource/PokemonResourceIntegration";

export default interface PokedexIntegration {
    findPokemonByName(name: string): Promise<PokemonResourceIntegration>
}

export class PokedexIntegrationImpl implements PokedexIntegration {
    findPokemonByName(name: string): Promise<PokemonResourceIntegration> {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                return res
                    .json()
                    .then(data => {
                        const pokemon = new PokemonResourceIntegration();
                        pokemon.name = data.name;
                        pokemon.numberOfAbilities = data.abilities.length;
                        pokemon.baseExperience = data.base_experience;
                        pokemon.imageUrl = data.sprites.front_default;
                        return pokemon;
                    });
            })
            .catch(i => {
                return new PokemonResourceIntegration();
            });
    };
}