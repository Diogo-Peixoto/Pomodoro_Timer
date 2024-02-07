import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import Timer from "../../assets/timer-icon.svg";
import Perch from "../../assets/perch.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
      <nav>
        <a>
          <img src={Timer} alt="Timer" />
        </a>
        <a>
          <img src={Perch} alt="Perch" />
        </a>
      </nav>
    </HeaderContainer>
  );
};
