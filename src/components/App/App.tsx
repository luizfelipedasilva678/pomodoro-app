import React from 'react';
import Header from '../Header/Header';
import Div from './styled';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

function App() {
  return (
    <Div>
      <Header />
      <TimeDisplay />
    </Div>
  );
}

export default App;
