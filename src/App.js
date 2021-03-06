import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
class App extends Component {  
  render() {  
    return (  
      <div> 
        <IterationSample/>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/> 
        <button onClick={() => this.scrollBox.scrollToBottom()}> 맨 밑으로 </button> 
      </div> 
    );  
  } 
}  
export default App;