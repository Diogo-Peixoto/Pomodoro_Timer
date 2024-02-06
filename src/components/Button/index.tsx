import { ButtonVariant } from "../../@types";
import { Container } from "./style";

interface IButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({ variant = "primary" }: IButtonProps) => {
  return <Container variant={variant}>Enviar</Container>;
};
