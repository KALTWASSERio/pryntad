import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans',sans-serif;
    font-size: 16px;
    color: #28233c;
    line-height: 1.5em;
  }


  html, body {
   /*  position: fixed; */
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }

  input, select, button {
    font-size: 1em;
  }

  input {
    border: 1px solid #dcdcdc;
    background: white;
    padding-left: 4px;
    width: 100%;
    font-family: sans-serif;
    font-weight: lighter; 
    min-height: 1.5em;
    left: -9999px;
}

input[type="date"]
{
    min-height: 1.5em;
    left: -9999px;
}

input[type=file]::-webkit-file-upload-button {
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #a0a09b;
    padding: 8px;
    font-weight: lighter; 
    left: -9999px;
  }

  input[type=radio]:checked + label {
  background-color: #d70064;
  color: white;
  left: -9999px;
} 

  ::placeholder {
    color: #a0a09b;
  }

  select {
    border: 1px solid #dcdcdc;
    background: white;
    padding-left: 4px;
    width: 100%;
    font-weight: lighter; 
    min-height: 1.5em;
    left: -9999px;
  }

  :invalid {
    color: #a0a09b;
}

  button {
    background-color: #d70064;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
    color: white;
    display: inline-block;
    border: none;

    :hover {
    background-color: white;
    border: 2px solid #d70064;
    color: #d70064;
}
  }

`
