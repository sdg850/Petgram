import { createGlobalStyle } from "styled-components";

export const GobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
    font-family: sans-serif;

}

*, *::after, *::before{
    box-sizing: inherit;
}

ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
}

body{
    background-color: #fefefe;
    height: 100vh;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    overscroll-behavior: none;
}

#app{
    box-shadow: 0px 0px, 10px;
    overflow-x: none;
    min-height: 100vh;
    padding: 10px;
}

`
