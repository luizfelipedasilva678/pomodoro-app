import React from 'react';
import './App.css';

function App() {
  const hello = (txt: string): string => txt;

  return (
    <div className="App">
      <header className="App-header">
        <p> {hello('Hello World Luiz')} </p>
      </header>
    </div>
  );
}

export default App;
