import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Layout: FC = (): JSX.Element => {
  return (
    <PageWrapper>
      <NavBar>
        <Logo />
        <Menus>
          <Menu href="/">Home</Menu>
          <Menu>Search</Menu>
        </Menus>
      </NavBar>
      <ContentWrapper>
        <Content>
          <Outlet />
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Layout;

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.section`
  position:relative;
  width: 100%;
  flex: 1 1 auto;
  text-align: center;
  margin: 0px;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: 400px) {
    padding: 0px 1rem;
  }
`;
const Content = styled.div`
  width: 800px;
  margin:32px auto;
  text-align:center;
`;

export const NavBar = styled.nav`
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
`;

const Menu = styled.a`
  outline: none;
  color: var(--slate-400);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  text-decoration: none;
  transition: all 0.37s ease-in-out;
  &:hover {
    color: var(--slate-100);
  }
`;
