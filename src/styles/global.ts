import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme["gray-900"]};
        color: ${({ theme }) => theme["gray-300"]};
    }

    border-style, input , textarea,button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0  2px ${({ theme }) => theme["gray-300"]};
    }
    
`;
