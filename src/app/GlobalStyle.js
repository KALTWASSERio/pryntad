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
    background: #f6f6f6;
  }


  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
    line-height: 1.5em;
  }

  input, select, button {
    font-size: 1em;
  }

  input {
    border: 1px solid #dcdcdc;
    padding-left: 8px;
    background: white;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-weight: lighter; 
    height: 2.4em;
    left: -9999px;

    :focus {
      outline: 2px solid #d70064;
    }
}

input[type="date"]
    {
      left: -9999px;
      height: 2.4em;
      
    :focus {
      outline: 2px solid #d70064;
    }
}

input[type=file]::-webkit-file-upload-button {
    background: white;
    border: 1px solid #d70064;
    border-radius: 8px;
    color: #d70064;
    padding: 8px;
    font-weight: lighter; 
    left: -9999px;
    width: 100%;
    height: 2.4em;

    :focus {
      outline: 2px solid #d70064;
    }
  }

  input[type=radio] {
  background-color: white;
  border: 1px solid #d70064;
  color: #d70064;;
  left: -9999px;
  height: 2.4em;

  :focus {
      outline: 2px solid #d70064;
    }

  :checked + label {
  background-color: #d70064;
  border: 1px solid #d70064;
  color: white;
  left: -9999px;
} 

  }

  ::placeholder {
    color: #a0a09b;
  }

  select {
    border: 1px solid #dcdcdc;
    background: white;
    padding: 8px;
    width: 100%;
    font-weight: lighter; 
    min-height: 2em;
    left: -9999px;
    height: 2.4em;

    :focus {
      outline: 2px solid #d70064;
    }

  }


  :invalid {
    color: #a0a09b;
}

  button {
    background-color: #d70064;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
    color: white; 
    display: inline-block;
    border: 1px solid #d70064;

    :hover {
    background-color: white;
    border: 2px solid #d70064;
    color: #d70064;
    }
    
    :focus {
      outline: 2px solid #d70064;
      border-radius: 8px;
    }
  }

`
