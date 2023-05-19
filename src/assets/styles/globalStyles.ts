import { createGlobalStyle } from 'styled-components';

import { fontStyles } from './fontStyles';
import { COLOR } from './variables.enum';

export const GlobalStyles = createGlobalStyle`
  ${fontStyles}

  * {
    margin : 0;
    padding: 0;
    font-family: 'Inter', Arial, sans-serif;
  }
  
  body {
    font-weight: 600;
    background-color: ${COLOR.WHITE};
    color: ${COLOR.PRIMARY};
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: #E5E5E9;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;
