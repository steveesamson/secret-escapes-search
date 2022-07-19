import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout: FC = (): JSX.Element => {
    return (
        <PageWrapper>
            <NavBar>
                <Logo>Secret Escapes</Logo>
                <Menus>
                    <Menu href="/">Home</Menu>
                    <Menu>Search</Menu>
                </Menus>
            </NavBar>
            <Page>
                <Outlet />
            </Page>
        </PageWrapper>
    );
};

export default Layout;

const PageWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = styled.div`
  width: 700px;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: var(--slate-100);
  border-bottom: 1px solid var(--slate-400);
  padding: 8px 32px;
  width:100%;
`;


const Logo = styled.a`
  display: inline-block;
  outline: none;
  background-color: var(--slate-700);
  border: 1px soid var(--slate-700);
  color: var(--slate-50);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding:6px 8px;
  transition: all 0.37s ease-in-out;
  border-radius:8px;
`;

const Menus = styled.div`
  outline: none;
  margin-left: auto;
`;

const Menu = styled.a`
  outline: none;
  color: var(--slate-600);
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  padding: 8px;
  transition: all 0.37s ease-in-out;
`;
