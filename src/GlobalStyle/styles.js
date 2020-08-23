import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    background: hsl(0, 0%, 98%);    
    font-family: 'Nunito Sans', 'sans-serif', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;
  }
  
  img {
    height: 100%;
    width: 100%;
  }

  li, ol {
     list-style: none;
  }
`;

export default GlobalStyle;