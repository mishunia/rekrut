import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600|Poppins:300|Raleway:500');


 *, *::before, *::after {
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
   
   
    line-height: 1.25;
    font-family: ${({ theme }) => theme.fonts.base};
   
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
  button {
    outline: 0;
    border: 0;
  }
  h1, h2, h3, h4 {
    margin: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  

`

export default GlobalStyle
