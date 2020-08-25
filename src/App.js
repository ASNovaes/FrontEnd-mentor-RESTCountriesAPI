import React, { useState, useEffect } from "react";
import Header from "./components/Header/index.js";
import Content from "./components/Content/index.js";
import GlobalStyle from "./styles/global.js";
import ContextProvider from "./components/Context/index.js";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

const App = () => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Content />
        </ContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
