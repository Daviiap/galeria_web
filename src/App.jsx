import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import GlobalStyle from './global';

function App() {
  return (
    <AppComponent>
      <GlobalStyle />
      <Routes />
    </AppComponent>
  );
}

export default App;

const AppComponent = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
`;
