import { css } from 'styled-components';

import InterBlack from '../fonts/Inter/static/Inter-Black.ttf';
import InterBold from '../fonts/Inter/static/Inter-Bold.ttf';
import InterExtraBold from '../fonts/Inter/static/Inter-ExtraBold.ttf';
import InterExtraLight from '../fonts/Inter/static/Inter-ExtraLight.ttf';
import InterLight from '../fonts/Inter/static/Inter-Light.ttf';
import InterMedium from '../fonts/Inter/static/Inter-Medium.ttf';
import InterRegular from '../fonts/Inter/static/Inter-Regular.ttf';
import InterSemiBold from '../fonts/Inter/static/Inter-SemiBold.ttf';
import InterThin from '../fonts/Inter/static/Inter-Thin.ttf';

export const fontStyles = css`
  @font-face {
    font-family: 'Inter';
    src: url(${InterThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;
