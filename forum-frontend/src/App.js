import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Posts />
      </div>
    );
  }
}

export default App;
