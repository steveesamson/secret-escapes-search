import React from 'react';
import styled from 'styled-components';

const Logo = (): JSX.Element => (<LogoLink href="/">
  <img src='https://d1x3cbuht6sy0f.cloudfront.net/assets/images/logos/se-logo-uk.png' alt='logo' />
</LogoLink>);

export default Logo;

export const LogoLink = styled.a`
  display: inline-block;
  outline: none;
  border: 1px soid var(--slate-700);
  color: var(--slate-50);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding:6px 8px;
  transition: all 0.37s ease-in-out;
  border-radius:8px;
  text-decoration:none;
  & img{
    width:220px;
  }
`;