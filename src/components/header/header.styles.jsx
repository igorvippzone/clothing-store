import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media (max-width: 480px) {
    height: 100%;
    width: 50px;
    padding: 10px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;

  &.active {
    color: red;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
  }
`;
