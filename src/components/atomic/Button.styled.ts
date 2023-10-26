import styled from "styled-components";

export const Button = styled.button`
  /* Styles for the button */
  padding: 10px 20px;
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #c2185b;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff4081;
  }
`;

export const PrimaryButton = styled(Button)`
  /* Styles for the primary button */
  background-color: #2196f3;

  &:hover {
    background-color: #1976d2;
  }
`;

export const SecondaryButton = styled(Button)`
  /* Styles for the secondary button */
  background-color: #9e9e9e;

  &:hover {
    background-color: #757575;
  }
`;

// ... additional styled components related to buttons
