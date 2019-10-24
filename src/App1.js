import React, { Component } from 'react';
import './App.css';
import DisplayDate from './Components/DisplayDate';
import { color } from './Base'



class App extends Component {

  render(){
    return (
      <>
        <div className="App">
          <DisplayDate
            weekDay
            date 
            clock 
            hour12 
            showSeconds
            color= {color.primary}
            fontWeight = "700"
            textTransform = "capitalize"
            // typeInter
          />
        </div>
     </>
    );
  } 
}

export default App;