import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    };

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('component will Mount (deprecated)');
    }

    componentDidMount() {
        console.log('component Did Mount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if( nextState.number % 5 === 0) return false;
        return true;
    }
    
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1 
        });
    }

    handleDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1 
        });
    }

    render() {
        console.log('render');
        return (
          <div>
            <h1>카운터</h1>
            <div>값: {this.state.number}</div>
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>
          </div>
        );
      }
}

export default Counter;