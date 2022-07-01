// Nav
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const isLogin = sessionStorage.getItem('userToken');

  const handleClick = () => {
    sessionStorage.clear();
  };

  return (
    <Container>
      <UlLogo>
        <Li>
          <NavLink to="/home">Home</NavLink>
        </Li>
      </UlLogo>
      <Ul>
        <Li>
          <NavLink to="/ranking">랭킹</NavLink>
        </Li>
        <Li>
          <NavLink to="/community">커뮤니티</NavLink>
        </Li>
        {isLogin ? (
          <>
            <Li>
              <NavLink to="/">
                <p onClick={handleClick}>로그아웃</p>
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/mypage">마이페이지</NavLink>
            </Li>
          </>
        ) : (
          <>
            <Li>
              <NavLink to="/signin">로그인</NavLink>
            </Li>
            <Li>
              <NavLink to="/signup">회원가입</NavLink>
            </Li>
          </>
        )}
      </Ul>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  width: 100%;
  background: #d3d3d3;
`;
const UlLogo = styled.ul`
  display: flex;
  justify-content: flex-start;
  height: 4rem;
  width: 40%;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 4rem;
  width: 40%;
`;
const Li = styled.li`
  font-family: 'notoSansKr';
  font-size: 1rem;
  margin: 1rem;
`;
const P = styled.p`
  font-family: 'notoSansKr';
  font-size: 1rem;
  margin: 1rem;
`;
