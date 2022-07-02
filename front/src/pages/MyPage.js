import React, { useEffect, useState } from 'react';

import Nav from '../components/Nav';
import * as Api from '../Api';
import styled from 'styled-components';

const MyPage = () => {
  const _id = sessionStorage.getItem('_id');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    Api.get(`users/${_id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
    });
  }, []);

  return (
    <Container>
      <Nav />
      <InfoContainer>
        <Info>
          <P>{name}</P>
          <P>{email}</P>
        </Info>

        <BtnContainer>
          <Btn style={{ border: 'none', background: 'white' }}>
            <Img alt="좋아요" src="./imgs/save.png" />
            <div>내 레시피</div>
          </Btn>
          <Btn style={{ border: 'none', background: 'white' }}>
            <Img alt="좋아요" src="./imgs/heart.png" />
            <div>좋아요 관리</div>
          </Btn>
          <Btn style={{ border: 'none', background: 'white' }}>
            <Img alt="댓글" src="./imgs/comment.png" />
            <div>댓글 관리</div>
          </Btn>
          <Btn style={{ border: 'none', background: 'white' }}>
            <Img alt="북마크" src="./imgs/bookmark.png" />
            <div>북마크 관리</div>
          </Btn>
        </BtnContainer>

        {false ? (
          <div style={{ margin: '1rem', fontSize: '3rem' }}>
            북마크가 없어요
          </div>
        ) : (
          <BookmarkContainer>{}</BookmarkContainer>
        )}
      </InfoContainer>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #f5f6f7;
`;
const InfoContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  background: white;
`;
const Info = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  border-radius: 1rem;
`;
const P = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 1rem;
  font-weight: bold;
`;
const BookmarkContainer = styled.div`
  width: 80%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Bookmark = styled.div`
  width: 80%;
  background: white;
  margin: 1rem;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  height: 2rem;
`;
const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  cursor: pointer;
  margin: 1rem;
`;
