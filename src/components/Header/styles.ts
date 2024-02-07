import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding-inline: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
    max-width: 48px;
  }

  a {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme["green-300"]};
    }
  }
`;
