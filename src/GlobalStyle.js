import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
--color-pink: #d70761;
--color-dark-mode-gray: #121212;
--color-whitesmoke: whitesmoke;
--color-primary-gray: hsl(220, 15%, 35%);
--color-font: #f2f2f2;
--color-light-gray: #9FA1BE;
--color-delete-message: rgba(255, 255, 255, 0.95);
--color-cancle-delete: #3d9816;
--color-confirme-delete: #e52b50;
--color-middle-gray: #4C5567;
--color-background:#edeff4;
--color-icon-button: #cbc5b9;
--color-bookmark: #28f89e;
--color-white: #fff;
  }

*{
    box-sizing: border-box;
}

body{
    font-size: 112.5%;
    margin: 0 auto;
    border-radius: 6px;
    line-height: 1.5;
    font-family: sans-serif;
    background-color: var(--color-background);
    font-family: -apple-system,BlinkMacSystemFont,Roboto,Oxygen-Sans,Cantarell,"Helvetica Neue",sans-serif;
}

label, input, textarea {
    font-size: 1rem;
}
`;
