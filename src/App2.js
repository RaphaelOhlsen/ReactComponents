import React from 'react';

class App extends React.Component{
  render(){
    return React.createElement('h1',{style:{color:"red"}},
            `Welcome to`)
  }
}

export default App;