import React, { Component } from 'react';
import './App.css';
import PokemonSearch from './presenter/PokemonSearch';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <PokemonSearch name="onix" />
      </div>
    );
  }
}