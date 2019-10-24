import React, { useState } from 'react';
import './App.css';
import EditInPlace, {TextArea} from './Components/EditInPlace';


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
            viewAs="h3"
            value={last}
            onChangeValue = {setLast}
          />
          <TextArea 
            viewAs="pre"
            value={last}
            onChangeValue = {setLast}
          />
          <hr/>
          Name: {name} {last}
        </div>
    );
} 

export default App;
