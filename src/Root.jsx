import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,body{
    margin:0;
    padding:0;
  }
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,500&display=swap");

* {
  font-family: "Noto Sans KR", sans-serif;
}
`

const Root = () => {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </>
    );
};

export default Root;