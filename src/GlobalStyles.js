import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        /* font-family: 'Encode Sans Expanded', sans-serif; */
        font-family: "GeForce", Helvetica, sans-serif;
        color: #222;
    }
`;