import React from "react";

import { Button } from "components/atomic";

import imgPng from "../../assets/images/img.png";

import { useAuthContext } from "../../contexts/LoginContext";

export const Login: React.FC = () => {
  const auth = useAuthContext();

  return (
    <>
      <img src={imgPng} alt="image" />
      <div>LOGIN</div>
      <Button
        onClick={() => {
          auth.login("email", "pass");
        }}
      >
        Default Button
      </Button>
    </>
  );
};
