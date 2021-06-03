import styled from "styled-components";

type HeaderMainProps = {
  dark: boolean;
};

export const HeaderMain = styled.header<HeaderMainProps>`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  background: ${(props) => (props.dark ? "black" : "white")};
  justify-content: space-between;
  color: white;
`;
