import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    
    font-size: 13px;
    background: #f5f5f5;
  }

  body, html {
    height: 100%;
  }

  a, button {
    cursor: pointer;
  }
`

export default GlobalStyle