import PokedexGateway from "../../usecase/gateway/PokedexGateway";
import Pokemon from "../../domain/Pokemon";
import PokedexIntegration, { PokedexIntegrationImpl } from "../PokedexIntegration";
import PokemonResourceIntegration from "../resource/PokemonResourceIntegration";

export default class PokedexGatewayImpl implements PokedexGateway {

    private pokemonIntegration: PokedexIntegration = new PokedexIntegrationImpl();

    findPokemonByName(name: string): Promise<Pokemon> {
        return this.pokemonIntegration.findPokemonByName(name)
            .then(pokemonIntegrationResouirce => { return this.converter(pokemonIntegrationResouirce) });

    }

    private converter(pokemonIntegrationResouirce: PokemonResourceIntegration): Pokemon {
        const pokemon = new Pokemon('');
        pokemon.name = pokemonIntegrationResouirce.name;
        pokemon.baseExperience = pokemonIntegrationResouirce.baseExperience;
        pokemon.numberOfAbilities = pokemonIntegrationResouirce.numberOfAbilities;
        pokemon.imageUrl = pokemonIntegrationResouirce.imageUrl;
        return pokemon;
    }

}