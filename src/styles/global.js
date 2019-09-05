import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;

    font-size: 13px;
  }

  body, html {
    height: 100%;
    background: #f5f5f5;
    scroll-behavior: smooth;
  }

  a, button {
    cursor: pointer;
  }

  a {
    color: #ffd32a;
  }

  .iframe {
    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);
  }

  .carousel.carousel-slider {
      margin-left: auto;
      margin-right: auto;
      border: none;
      max-width: 980px;
      height: 450px;

      @media(max-width: 780px) {
          height: 35vh;
      }
  }

  .slides {
      height: 450px;

      @media(max-width: 780px) {
          height: 35vh;
      }
  }

  .slides > img {
      width: 100%;
      height: 450px;

      @media(max-width: 780px) {
          height: 35vh;
      }
  }
`

export default GlobalStyle
