import React, { Component } from 'react';
import '../App.css';
import SearchRecipes from './SearchRecipes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Recipe Finder</h3>
        <SearchRecipes />
      </div>
    );
  }
}

export default App;
