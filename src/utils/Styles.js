import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url("https://use.typekit.net/oun7bhh.css");
    h1 {
        font-family: brandon-grotesque;
        font-weight: 700;
        fontStyle: bold;
        font-size: 4rem;
        line-height: 1rem;
        text-transform: uppercase;
        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }
    p {
          font-family: brandon-grotesque;
    }
    h2 {
        font-family: brandon-grotesque;
        font-weight: 700;
        fontStyle: bold;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }
    h3 {
        font-family: brandon-grotesque;
        font-weight: 700;
        fontStyle: bold;
        font-size: .7rem;
        margin: 0;
        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }
    h4 {
        font-family: brandon-grotesque;
        font-weight: 400;
        font-style: normal;
        font-size: 0.75rem;
        margin: 0;
        text-transform: uppercase;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const Theme = {
    black: "#000000",
    white: "#FFFFFF",
    darkgray: "#707070",
    lightgray: "#B4B4B4",
    cream: "#FCFBF7",
    babyBlue: "#B5E0F7",
}