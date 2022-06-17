import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

import YouTube from 'react-youtube';

const Result = () => {
  const [cooking, setCooking] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [bookMarkIcon, setbookMarkIcon] = useState(false);

  const handleBtnClick = () => {
    setbookMarkIcon(!bookMarkIcon);

    if (bookMarkIcon === true) {
      alert('북마크에 추가 되었습니다.');
      // ToDO: 북마크에 추가
    } else {
      alert('북마크에서 해제 되었습니다.');
      // ToDo: 북마크에서 해제
    }
  };
  const handleSubmit = () => {};

  useEffect(() => {
    //
  });

  return (
    <Container>
      <Nav />
      <Div>
        <Video muted autoplay loop>
          <Source src="./video/result.mp4" alt="요리" type="video/mp4" />
        </Video>
        <Content>
          <div
            style={{ border: '0.1rem solid whitesmoke', borderRadius: '1rem' }}
          >
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                margin: '1rem',
              }}
            >
              부대찌개
            </p>
          </div>
          <div
            style={{
              borderBottom: '0.1rem solid whitesmoke',
            }}
          >
            <p style={{ fontSize: '1rem', margin: '1rem' }}>
              햄, 소시지, 두부, 김치, 대파, 양파, 고추, 치즈
            </p>
            <p style={{ fontSize: '1rem', margin: '1rem' }}>
              마트 등에서 파는 부대찌개용 양념을 하나 구입한다(한 봉당
              천원~2천원대 가격에 구할 수 있다). 양념봉지 뒷면에 있는 물의
              양만큼 냄비에 물을 넣고 양념을 넣고 끓인다. 햄과 소시지, 두부,
              김치를 넉넉히 깔고 대파와 채썬 양파, 매운 고추(선택사항)를 적당히
              얹어놓고 육수를 부어 끓인다. 다 끓어갈 즈음에서 슬라이스 치즈
              1/2장을 국물에 녹인다(선택사항). 베이크드 빈즈가 있다면 넣으면
              좋으나, 보통 구비해두질 않으니 대신 토마토 케첩을 1인분당 반
              스푼씩 넣고 된장을 약간 넣는다. 베이크드 빈즈 = 설탕+토마토+동물의
              지방+향신료+강낭콩 이기 때문에, 동물의 지방과 향신료는
              소세지,햄에서 더 넣고, 설탕과 토마토를 케첩으로 대체하고 콩을
              된장으로 대체하는 것이다. 이러면 베이크드 빈즈가 들어간 것과
              똑같은 조합이 되므로 우리가 아는 부대찌개 맛이 거의 비슷하게 난다.
            </p>
          </div>
          <BtnContainer>
            <button style={{ border: 'none', background: 'white' }}>
              <Img alt="북마크" src="./imgs/bookmark.png" />
            </button>
          </BtnContainer>
        </Content>
        <ButtonContainer>
          <FormButton onClick={handleSubmit} buttonType="submit" type="button">
            레시피 다시받기
          </FormButton>
        </ButtonContainer>
      </Div>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const Div = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Video = styled.video`
  width: 100%;
  border: none;
  filter: brightness(50%);
`;
const Content = styled.div`
  position: absolute;
  margin: 7rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  background: white;
  border-radius: 1rem;
  & p:not(:first-of-type) {
    font-size: 1rem;
    margin: 1rem;
  }
`;
const Source = styled.source``;
const BtnContainer = styled.div`
  display: flex;
  margin: 0.5rem;
`;
const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  background: none;
`;
const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  margin: 1rem;
`;

const FormButton = styled.button`
  margin: 35rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  background: #ffa500;
  width: 11rem;
  height: 3rem;
  color: white;
  transition: 0.4s;
  &:hover {
    background: #ff8339;
  }
`;
