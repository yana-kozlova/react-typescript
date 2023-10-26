import React from "react";

import { ButtonGroup } from "@mui/material";

import { Button, PrimaryButton, SecondaryButton } from "components/atomic";

import imgPng from "assets/images/img.png";

export const Home: React.FC = () => {
  return (
    <>
      <Button>Default Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <img src={imgPng} alt="image" />
      <div>HOME</div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};
