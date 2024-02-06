import styled from "styled-components";
import { ButtonVariant } from "../../@types";

interface IButtonProps {
  variant: ButtonVariant;
}

const buttonVarient = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const Container = styled.button<IButtonProps>`
  width: 100px;
  height: 30px;

  background-color: ${({ variant }) => buttonVarient[variant]};
`;
