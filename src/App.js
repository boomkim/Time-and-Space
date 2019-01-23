import React, { Component } from 'react';
import Top from './components/navbar/Top';
import Counter from './components/test/Counter';
import PhoneForm from './components/test/PhoneForm';
import './App.css';

class App extends Component {
  id = 2
  state = {
    information: [
      {
          id:0,
          name: '김범환',
          phone: '010-9052-3799'
      },
      {
          id:1,
          name: '이효정',
          phone: '010-2855-3565'
      }
  ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id:this.id++, ...data})
    });
  }
  render() {
    const { information } = this.state;
    return (
      <div className="App">
        <Top />
        <div className="container">
          <button type="button" className="btn btn-primary">재밌군 </button>
        </div>
        <Counter />
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <div>
          {JSON.stringify(information)}
        </div>
      </div>
    );
  }
}

export default App;
