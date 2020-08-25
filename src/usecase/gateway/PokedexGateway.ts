import Pokemon from "../../domain/Pokemon";

export default interface PokedexGateway {

    findPokemonByName(name: string): Promise<Pokemon>;
}