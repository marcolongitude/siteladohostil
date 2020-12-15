import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        --webkit-font-smoothing: antialiased;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
        color: white;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`   

export default GlobalStyle