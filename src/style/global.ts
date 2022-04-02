import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --dark-blue: #363F5F;
    --light-blue: #6933ff;
    
    --gray: #969CB3;
    --light-gray: #F0F2F5;
    
    --green: #33CC95;
    
    --red: #E62E4D;
    
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    @media (min-width: 720px) {
      font-size: 87.5%;
    }

    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
  }

  body {
    background: var(--light-gray);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600
  }

  button  {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`