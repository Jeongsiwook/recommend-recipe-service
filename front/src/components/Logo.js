import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => navigate('/home');

  return (
    <LogoContainer>
      <LogoImg
        onClick={handleLogoClick}
        src="./imgs/logo.png"
        alt="logo"
      ></LogoImg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 80%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 20rem;
  cursor: pointer;
`;
