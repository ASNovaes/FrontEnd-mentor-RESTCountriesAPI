import React from 'react';
import Header from './components/Header/index.js'
import Content from './components/Content/index.js'
import GlobalStyle from "./GlobalStyle/styles.js";
import ContextProvider from "./components/Context/index.js";

const App = () => {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <Header />
        <Content />
      </ContextProvider>
    </>
  );
}

export default App;
