import React, { Component } from 'react';
import PokemonResource from './resource/PokemonResource';
import PokemonSearchUseCase from '../usecase/PokemonsSearchUseCase';
import PokemonSearchCaseImpl from '../usecase/impl/PokemonsSearchUseCaseImpl';
import Pokemon from '../domain/Pokemon';

export default class PokemonSearch extends Component<PokemonResource> {

    private pokemonSearchUseCase: PokemonSearchUseCase = new PokemonSearchCaseImpl();
    private pokemon: PokemonResource;

    constructor(props: PokemonResource) {
        super(props)
        this.state = new PokemonResource();
        this.pokemon = props;

    }

    onRead() {
        this.pokemonSearchUseCase.execute(new Pokemon(this.pokemon.name))
            .then(pokemonStats => {
                this.pokemon = new PokemonResource(pokemonStats.name, pokemonStats.numberOfAbilities, pokemonStats.baseExperience, pokemonStats.imageUrl)
                console.log(this.pokemon)
                this.setState(this.pokemon);
            });
    }

    change(pokemonEventChange: any) {
        this.pokemon = new PokemonResource(pokemonEventChange.target.value)
    }

    render() {
        return (
            <>
                <input type="text" onChange={pokemonEventChange => this.change(pokemonEventChange)} />
                <br/>
                <button onClick={() => this.onRead()}>Batata</button>
                <br/>
                <strong>Nome: </strong> {this.pokemon.name}
                <br/>
                <strong>XP</strong> {this.pokemon.baseExperience}
                <br/>
                <strong>Habilidades</strong> {this.pokemon.numberOfAbilities}
                <br/>
                <img src={this.pokemon.imageUrl} ></img>
            </>
        );
    }
}