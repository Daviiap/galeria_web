import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font: 400 14px 'Lato', sans-serif;
        overflow: hidden;
        --main-color: rgba(0, 0, 0);
        --secondary-color: rgba(78, 145, 90);
    }

    input, button, textarea{
        font: 400 18px 'Lato', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
