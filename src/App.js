import React, { Component } from 'react';
import './App.scss';
import Product from './components/Product';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Product />
      </main>
    );
  }
}

export default App;
