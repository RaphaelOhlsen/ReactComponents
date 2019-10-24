import React, { useState } from 'react';
import './App.css';
import EditInPlace from './Components/EditInPlace';


const App = () => {
  const [name, setName]  = useState('Nome');
  const [last, setLast] = useState('SobreNome')
    return (
        <div className="App">
          <EditInPlace 
            value={name}
            onChangeValue = {setName}
          />
          <EditInPlace 
            value={last}
            onChangeValue = {setLast}
          />
          <hr/>
          Name: {name} {last}
        </div>
    );
} 

export default App;
