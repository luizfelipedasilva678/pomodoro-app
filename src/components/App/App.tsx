import React from 'react';
import Header from '../Header/Header';
import Div from './styled';
import Tabs from '../Tabs/Tabs';
import GlobalStyle from '../../styles/GlobalStyles';

function App() {
  return (
    <Div>
      <GlobalStyle />
      <Header />
      <Tabs />
    </Div>
  );
}

export default App;
