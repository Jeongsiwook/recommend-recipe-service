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
          <NavLink to='/home'>Home</NavLink>
        </Li>
      </UlLogo>
      <Ul>
        <Li>
          <NavLink to='/ranking'>랭킹</NavLink>
        </Li>
        <Li>
          <NavLink to='/community'>커뮤니티</NavLink>
        </Li>
        {isLogin ? (
          <>
            <Li>
              <NavLink to='/prolog'>로그아웃</NavLink>
            </Li>
            <Li>
              <NavLink to='/mypage'>마이페이지</NavLink>
            </Li>
          </>
        ) : (
          <>
            <Li>
              <NavLink to='/signin'>로그인</NavLink>
            </Li>
            <Li>
              <NavLink to='/signup'>회원가입</NavLink>
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
