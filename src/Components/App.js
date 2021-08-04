import React, { Component } from 'react';
import calculator from '../Logic/calculator';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends Component {

  state = {
    total: null,
    next : null,
    operation : null,
    
  }
 
  handleclick = (buttonName) => {
    console.log('clicked', buttonName)
    this.setState(calculator(this.state, buttonName))
    
  }

  
  render() {
    return (
      <div>
        <Display value={this.state.next || this.state.total || '0'}/>
        <ButtonPanel clickHandler={this.handleclick}/>
      </div>
    );
  }
  
}

export default App;
