import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import { ResultContext } from '../App';

import * as Api from '../Api';

const Result = () => {
  const [bookMarkIcon, setbookMarkIcon] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    resultCooking,
    setResultCooking,
    resultIngredients,
    setResultIngredients,
    resultRecipe,
    setResultRecipe,
  } = useContext(ResultContext);

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

  const handleSubmit = async () => {
    try {
      const res = await Api.post('recipes', {
        title: resultCooking,
        ingredients: resultIngredients,
      });

      setResultCooking(res.data.title);
      setResultIngredients(res.data.ingredients);
      setResultRecipe(res.data.recipe);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Nav />
      <Div>
        <Video muted autoPlay loop>
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
              {resultCooking}
            </p>
          </div>
          <div
            style={{
              borderBottom: '0.1rem solid whitesmoke',
            }}
          >
            <p style={{ fontSize: '1rem', margin: '1rem' }}>
              {resultIngredients}
            </p>
            <p style={{ fontSize: '1rem', margin: '1rem' }}>{resultRecipe}</p>
          </div>
          <BtnContainer>
            <button
              onClick={handleBtnClick}
              style={{ border: 'none', background: 'white' }}
            >
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
