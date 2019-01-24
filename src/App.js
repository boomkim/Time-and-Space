import React, { Component } from 'react';
import Top from './components/navbar/Top';
import Counter from './components/test/Counter';
import PhoneForm from './components/test/PhoneForm';
import PhoneInfoList from './components/test/PhoneInfoList';
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
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }
  handleUpdate = (id, data) => {
    const { information} = this.state;
    this.setState({
      information: information.map(
        info => info.id === id 
          ? { ...info, ...data} 
          : info)
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
        <PhoneInfoList 
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
