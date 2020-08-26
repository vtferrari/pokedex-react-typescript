import React, { Component } from 'react';
import PokemonResource from './resource/PokemonResource';
import PokemonSearchUseCase from '../usecase/PokemonsSearchUseCase';
import PokemonSearchCaseImpl from '../usecase/impl/PokemonsSearchUseCaseImpl';
import Pokemon from '../domain/Pokemon';

export default class PokemonSearch extends Component<PokemonResource> {

    private pokemonSearchUseCase: PokemonSearchUseCase = new PokemonSearchCaseImpl();
    private pokemon: PokemonResource;
    private _isMounted: boolean = false;
    constructor(props: PokemonResource) {
        super(props)
        this.pokemon = props;
    }

    componentDidMount() {
        this._isMounted = true;
        this.onRead()
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onRead() {
        this.pokemonSearchUseCase.execute(new Pokemon(this.pokemon.name))
            .then(pokemonStats => this.updatePokedex(pokemonStats));
    }
    
    updatePokedex(pokemonStats: PokemonResource) {
        if (this._isMounted) {
            this.pokemon = new PokemonResource(pokemonStats.name, pokemonStats.numberOfAbilities, pokemonStats.baseExperience, pokemonStats.imageUrl)
            this.forceUpdate();
        }
    }

    render() {
        return (
            <>
                <div className="pokedex">
                    <strong>Nome: </strong> {this.pokemon.name}
                    <br />
                    <strong>XP</strong> {this.pokemon.baseExperience}
                    <br />
                    <strong>Habilidades</strong> {this.pokemon.numberOfAbilities}
                    <br />
                    <img src={this.pokemon.imageUrl} alt={this.pokemon.name}></img>
                </div>
            </>
        );
    }
}