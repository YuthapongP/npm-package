import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    max-height: 100%;
    max-width: 100%;
    font-family: 'Montserrat-Italic', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: small;

    padding: 0;
    margin: 0;
  }

  button {
    font-family: 'Montserrat-Italic', sans-serif;
  }

  #root {
    height: 100%;
  }

  @font-face {
    font-family: 'Montserrat-Italic';
    src: url("@assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf");
    font-weight: normal;
    font-style: italic; 
  }

  @font-face {
    font-family: 'BebasNeue-Regular';
    src: url("@assets/fonts/Baseus/BebasNeue-Regular.ttf");
    font-weight: normal;
  }

  @font-face {
    font-family: 'Lora-Italic';
    src: url("@assets/fonts/Lora/Lora-Italic-VariableFont_wght.ttf");
    font-weight: normal;
    font-style: italic;
  } 

  @font-face {
    font-family: 'Lora-Variable';
    src: url("@assets/fonts/Lora/Lora-VariableFont_wght.ttf");
    font-weight: normal;
  }

  @font-face {
    font-family: 'PT-Serif';
    src: url("@assets/fonts/Lora/Lora-Italic-VariableFont_wght.ttf");
    font-weight: normal;

    
  }
`;

export default GlobalStyles;
