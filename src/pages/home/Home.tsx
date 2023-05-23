import React from 'react';

import imgPng from '@images/img.png';

import { Button, PrimaryButton, SecondaryButton } from 'components/atomic';
import { ButtonGroup } from '@mui/material';

export const Home: React.FC = () => {
  return (
    <>
      <Button>Default Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <img src={imgPng} alt='image' />
      <div>HOME</div>
      <ButtonGroup variant='contained' aria-label='outlined primary button group'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};
