import styled from "styled-components";

export const DefaultContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainerDefault = styled.div`
  width: 77.8%;
  height: 82.4%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme["gray-800"]};
  padding-block: 40px;
`;
