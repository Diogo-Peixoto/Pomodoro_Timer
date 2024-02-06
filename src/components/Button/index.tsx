import { ButtonVariant } from "../../type";
import { Container } from "./style";

interface IButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({ variant = "primary" }: IButtonProps) => {
  return <Container variant={variant}>Enviar</Container>;
};
