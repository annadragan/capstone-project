import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    font-size: 112.5%;
    margin: 0 auto;
    line-height: 1.5;
    font-family: sans-serif;
    background-color:#EDEFF4;
}
label, input, textarea {
    font-size: 1rem;
}
`;
