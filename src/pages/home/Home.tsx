import React from 'react';

import imgPng from '@images/img.png';

import { Button, PrimaryButton, SecondaryButton } from 'components/atomic';

export const Home: React.FC = () => {
  return (
    <>
      <Button>Default Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <img src={imgPng} alt='image' />
      <div>HOME</div>
    </>
  );
};
