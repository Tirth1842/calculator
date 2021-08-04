import React, { Component } from 'react';
import ButtonPanel from './Components/ButtonPanel';
import Display from './Components/Display';

class App extends Component {
  render() {
    return (
      <div>
        <Display value='117'/>
        <ButtonPanel/>
      </div>
    );
  }
  
}

export default App;
