import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans',sans-serif;
    font-size: 16px;
    color: #28233c;
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
    /* appearance: none; */
    border: 1px solid #dcdcdc;
    background: white;
    padding-left: 4px;
    width: 100%;
    font-family: sans-serif;
    font-weight: lighter; 
}

input[type=file]::-webkit-file-upload-button {
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #a0a09b;
    padding: 8px;
    font-weight: lighter; 
  }


  ::placeholder {
    color: #a0a09b;
  }

  select {
    appearance: none;
    border: 1px solid #dcdcdc;
    background: white;
    padding-left: 4px;
    width: 100%;
    font-weight: lighter; 
  }

  :invalid {
    color: #a0a09b;
}

  button {
    background: #d70064;
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    margin-bottom:12px;
    padding: 12px;
  }

`
