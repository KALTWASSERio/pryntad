import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
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

  input, select, button {
    font-size: 1em;
  }

  input {
    appearance: none;
    border: 2px solid #dcdcdc;
    background: white;
    padding-left: 4px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
}

  ::placeholder {
    color: #a0a09b;
  }

  select {
    appearance: none;
    border: 2px solid #dcdcdc;
    background: white;
    padding-left: 4px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    
  }

  :invalid {
    color: #a0a09b;
}

  button {
    background: #d70064;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
  }
`
