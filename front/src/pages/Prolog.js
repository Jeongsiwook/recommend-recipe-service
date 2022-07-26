// 프롤로그 페이지 - 간단한 소개 및 튜토리얼
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Prolog = () => {
  const navigate = useNavigate();
  const handleClickButton = () => navigate('/home');

  return (
    <Container>
      <MainIntroduction>
        <ContentP isOpaicty={true}>
          <p>냉장고를 부탁해!</p>
          <p>냉장고를 부탁해!를 소개합니다.</p>
        </ContentP>
        <ContentImg>
          <Img alt="냉장고를 부탁해 사진" src="./imgs/sampleImage.jpg" />
        </ContentImg>
      </MainIntroduction>
      <BookmarkIntroduction>
        <ContentImg>
          <Img alt="북마크 사진" src="./imgs/sampleImage.jpg" />
        </ContentImg>
        <ContentP>
          <p>북마크 기능</p>
          <p>북마크 기능에 대한 자세한 설명</p>
        </ContentP>
      </BookmarkIntroduction>
      <CommunityIntroduction>
        <ContentP>
          <p>커뮤니티 기능</p>
          <p>커뮤니티 기능에 대한 자세한 설명</p>
        </ContentP>
        <ContentImg>
          <Img alt="커뮤니티 사진" src="./imgs/sampleImage.jpg" />
        </ContentImg>
      </CommunityIntroduction>
      <RankingIntroduction>
        <ContentImg>
          <Img alt="랭킹 사진" src="./imgs/sampleImage.jpg" />
        </ContentImg>
        <ContentP>
          <p>랭킹 기능</p>
          <p>랭킹 기능에 대한 자세한 설명</p>
        </ContentP>
      </RankingIntroduction>
      <StartButton>
        <Button onClick={handleClickButton}>시작하기</Button>
      </StartButton>
    </Container>
  );
};

export default Prolog

const marginValue = '1rem';
// const paddingValue = '1rem';

const Container = styled.div`
  font-family: 'NotoSansKR';
  font-size: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${marginValue};
  // background: red;
`;
const MainIntroduction = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: ${marginValue};
  position: relative;
`;
const BookmarkIntroduction = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: ${marginValue};
  // background: green;
`;
const CommunityIntroduction = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: ${marginValue};
  // background: yellow;
`;
const RankingIntroduction = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: ${marginValue};
  // background: purple;
`;
const ContentP = styled.div`
  width: 50%;
  position: absolute;
  transition-property: all;
  transition-duration: 2s;
  transition-delay: 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(10%, 0);
`;
const ContentImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  transition-property: all;
  transition-duration: 1s;
  transition-delay: 0.5s;
  transform: translate(90%, 0);
`;
const Img = styled.img`
  width: 500px;
  height: 300px;
  border: none;
  border-radius: 2rem;
`;
const StartButton = styled.div`
  border: none;
`;
const Button = styled.button`
  margin: ${marginValue} 0;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background: #e9967a;
  width: 300px;
  height: 70px;
  color: white;
  
  &:hover {
    background: #e9865a;
  }
}
`