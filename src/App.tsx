import React, { MouseEventHandler } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import Button from './components/Button';


function App() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log('Hola Mundo');
  }

  return(
  <div className='App'>
    <Button handleClick={handleClick} >
      Hola Mundo
    </Button>
  </div>
  )
}

export default App;
