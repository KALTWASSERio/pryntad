import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
  }

  html, body {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }

  input, button {
    font-size: 1em;
  }

  input {
    appearance: none;
    border: 4px solid #dcdcdc;
    border-radius: none;
    background: white;
    padding-left: 4px;
  }

  button {
    background: #d70064;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;

  }
`