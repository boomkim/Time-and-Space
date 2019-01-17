import React, { Component } from 'react';
import Top from './components/navbar/Top';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <div className="container">
          <button type="button" className="btn btn-primary">여기엔 뭔가 들어갈꺼야 </button>
        </div>
      </div>
    );
  }
}

export default App;
