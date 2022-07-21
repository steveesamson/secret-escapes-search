import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGoBack } from "../hooks";
import Logo from "./Logo";

interface NavigationBarProps {
  isLanding?: boolean;
}

const NavigationBar: FC<NavigationBarProps> = ({ isLanding = false }): JSX.Element => {

  const goBack = useGoBack();

  return (
    <NavBar>
      <Logo />
      {!isLanding && (
        <Menus>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/search' onClick={goBack}>
            Search
          </NavLink>
        </Menus>
      )}
    </NavBar>
  );
};

export default NavigationBar;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: var(--slate-800);
  border-bottom: 1px solid var(--slate-400);
  padding: 8px 32px;
  width: 100%;
`;

const Menus = styled.div`
  outline: none;
  margin-left: auto;

  & a {
    outline: none;
    color: var(--slate-400);
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    padding: 8px 16px;
    text-decoration: none;
    transition: all 0.37s ease-in-out;

    &.active,
    &:hover {
      color: var(--tomato);
    }
  }
`;

