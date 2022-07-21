import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { PageWrapper } from "./common";
import NavigationBar from "./NavigationBar";


const Layout: FC = (): JSX.Element => {

  return (
    <PageWrapper>
      <NavigationBar />
      <ContentWrapper>
        <Content>
          <Outlet />
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Layout;



const ContentWrapper = styled.section`
  position:relative;
  display:flex;
  justify-content:center;
  width: 100%;
  flex: 1 1 auto;
  text-align: center;
  margin: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0px 16px 32px;

  // @media screen and (min-width: 400px) {
  //   padding: 0px 1rem;
  // }
`;
const Content = styled.div`

  width: 100%;
  margin:16px 16px 32px;
  text-align:center;

  @media screen and (min-width: 700px) {
    width: 600px;
    margin:32px 16px 32px;
  }

   @media screen and (min-width: 900px) {
    width: 800px;
    margin:32px 16px 32px;
  }
`;

