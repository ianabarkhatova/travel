import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        max-width: 100%;
    }
    
    //* {
    //    outline: 1px solid red;
    //}
    
    //html {
    //    overflow-x: hidden;
    //}
    
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }
    
    a {
        text-decoration: none;
    }
    
    ul, li {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }

    section {
        padding: 50px 0;

        @media ${theme.media.small} {
            padding: 80px 0;
        }
    }

    img, video {
        max-width: 100%;
        height: auto;
    }
`
