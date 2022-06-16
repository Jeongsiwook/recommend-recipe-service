// Nav
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const isLogin = false;

  return (
    <Container>
      <UlLogo>
        <Li>
          <NavLink to="/home">
            <P>Home</P>
          </NavLink>
        </Li>
      </UlLogo>
      <Ul>
        <Li>
          <NavLink to="/ranking">
            <P>랭킹</P>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/community">
            <P>커뮤니티</P>
          </NavLink>
        </Li>
        {isLogin ? (
          <>
            <Li>
              <NavLink to="/prolog">
                <P>로그아웃</P>
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/mypage">
                <P>마이페이지</P>
              </NavLink>
            </Li>
          </>
        ) : (
          <>
            <Li>
              <NavLink to="/signin">
                <P>로그인</P>
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/signup">
                <P>회원가입</P>
              </NavLink>
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
  background: white;
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
  color: #656565;
  &:hover {
    color: black;
  }
`;
