import styled from "styled-components";

type HeaderMainProps = {
  dark: boolean;
};

type RoundedButtonProps = {
  id: string;
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

export const RoundedButton = styled.button<RoundedButtonProps>`
  width: 150px;
  height: 20px;
  border-radius: 10px;
  margin-right: 20px;
  color: black;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

RoundedButton.defaultProps = {
  id: "",
};
