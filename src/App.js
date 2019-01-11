import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <h1> Hi World </h1>
    );
  }
}

export default App;
