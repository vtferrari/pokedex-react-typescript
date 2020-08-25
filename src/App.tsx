import React, { Component } from 'react';
import './App.css';
import PokemonSearch from './presenter/PokemonSearch';

export default class App extends Component {

  render() {
    const pokemonsSearched = require('../src/pokemon.json')
      .map((pokemonName: string) => pokemonName.toLocaleLowerCase());

    return (
      <div className="App">
        {
          pokemonsSearched.map(
            (value: string, index: number) => {
              return <PokemonSearch key={index} name={value} />
            })
        }
      </div>
    );
  }
}