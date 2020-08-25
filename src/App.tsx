import React, { Component } from 'react';
import './App.css';
import PokemonSearch from './presenter/PokemonSearch';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <PokemonSearch name="bulbasaur" />
        <PokemonSearch name="ivysaur" />
        <PokemonSearch name="venusaur" />
        <PokemonSearch name="charmander" />
        <PokemonSearch name="charmeleon" />
        <PokemonSearch name="charizard" />
        <PokemonSearch name="squirtle" />
        <PokemonSearch name="wartortle" />
        <PokemonSearch name="blastoise" />
        <PokemonSearch name="caterpie" />
        <PokemonSearch name="metapod" />
        <PokemonSearch name="butterfree" />
        <PokemonSearch name="weedle" />
        <PokemonSearch name="kakuna" />
        <PokemonSearch name="beedrill" />
        <PokemonSearch name="pidgey" />
        <PokemonSearch name="pidgeotto" />
        <PokemonSearch name="pidgeot" />
        <PokemonSearch name="rattata" />
        <PokemonSearch name="raticate" />
        <PokemonSearch name="spearow" />
        <PokemonSearch name="fearow" />
        <PokemonSearch name="ekans" />
        <PokemonSearch name="arbok" />
        <PokemonSearch name="pikachu" />
        <PokemonSearch name="raichu" />  
        <PokemonSearch name="growlithe" />  
      </div>
    );
  }
}