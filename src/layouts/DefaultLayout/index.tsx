import { Outlet } from "react-router";
import { DefaultContainer, MainContainerDefault } from "./styles";
import { Header } from "../../components/Header";

export const DefaultLayout = () => {
  return (
    <DefaultContainer>
      <MainContainerDefault>
        <Header />
        <Outlet />
      </MainContainerDefault>
    </DefaultContainer>
  );
};
