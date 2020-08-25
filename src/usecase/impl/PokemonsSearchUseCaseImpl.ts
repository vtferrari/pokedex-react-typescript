import SayHelloUseCase from "../PokemonsSearchUseCase";
import Pokemon from "../../domain/Pokemon";
import PokedexGatewayImpl from "../../integration/impl/PokedexGatewayImpl";
import PokedexGateway from "../gateway/PokedexGateway";


export default class SayHelloUseCaseImpl implements SayHelloUseCase {

    private pokemonGateway: PokedexGateway = new PokedexGatewayImpl();

    async execute(user: Pokemon): Promise<Pokemon> {
        return this.pokemonGateway.findPokemonByName(user.name)
            .then(pokemon => pokemon);
    }
}