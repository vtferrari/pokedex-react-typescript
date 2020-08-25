import PokemonResourceIntegration from "./resource/PokemonResourceIntegration";

export default interface PokedexIntegration {
    findPokemonByName(name: string): Promise<PokemonResourceIntegration>
}