import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  h1 {
    ${fonts.title}
  }

  h2, h3, h4, h5, h6 {
    ${fonts.subtitle}
  }

  body {
    background: ${colors.background}
  }

  button {
    cursor: pointer;
    ${fonts.button}
  }
`;
