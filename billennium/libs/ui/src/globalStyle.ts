import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Billennium-Italic';
        src: url('./lib/fonts/Billennium-Italic.otf') format('opentype');
    }

    @font-face {
        font-family: 'Billennium-Regular';
        src: url('./lib/fonts/Billennium-Regular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Billennium-SemiBold';
        src: url('./lib/fonts/Billennium-SemiBold.otf') format('opentype');
    }

    @font-face {
        font-family: 'Billennium-CompressedBold';
        src: url('./lib/fonts/Billennium-CompressedBold.otf') format('opentype');
    }

    body {
        margin: 0 !important;
        padding: 0 !important;
        background: #fff;
    }

    * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        margin: 0;
    }
`;

