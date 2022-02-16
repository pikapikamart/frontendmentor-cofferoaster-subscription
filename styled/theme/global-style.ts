import { createGlobalStyle } from "styled-components";
import { rem, fluid } from "../functions";


const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  ul,
  ol,
  ul {
    list-style: none;
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol{
    margin: 0;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea {
    border: none;
    font: inherit;
    outline: none;
  }

  button {
    color: inherit;
    cursor: pointer;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Font Families */

  body {
    font-family: 'Barlow', sans-serif;
    min-height: 100vh;
    max-width: ${rem(1600)};
    margin: 0 auto;
    padding: 0 ${fluid(24, 5.8, 80)} ${fluid(72, 7, 88)};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Fraunces', serif;
    font-weight: 700;
  }

  /* Custom for the site */

  p {
    line-height: 1.625;
  }

  a,
  button {

    &:focus-visible {
      outline: 3px dashed rgb(104, 190, 205);
      outline-offset: ${rem(3)};
    }
  }

  @media (prefers-reduce-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyle;