import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #f0f2f5
      --red: #E62E4D
      --blue: #5429CC

      --blue-light: #6933ff

      --text-title: #363F5F
      --text-body: #969CB3
      
      --green: #33CC95
      --shap: #fff
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
  }
}
  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `