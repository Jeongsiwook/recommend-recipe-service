import React, { useState, useContext } from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ResultContext } from '../App';

import * as Api from '../Api';

const Home = () => {
  const [cooking, setCooking] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const { setResultCooking, setResultIngredients, setResultRecipe } =
    useContext(ResultContext);
  const navigate = useNavigate();

  const handleCookingChange = (e) => {
    setCooking(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = async () => {
    const ingredientsPreprocessing = /,/i.test(ingredients)
      ? ingredients.split(',').map((ingredient) => ingredient.trim())
      : [ingredients];
    try {
      const res = await Api.post('recipes', {
        title: cooking,
        ingredients: ingredientsPreprocessing,
      });
      console.log(res.data);

      setResultCooking(res.data.title);
      setResultIngredients(res.data.ingredients);
      setResultRecipe(res.data.recipe);

      navigate('/result');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Nav />

      <FormContainer>
        <FloatingContainer1>
          <img src="./imgs/tomato.png" alt="토마토" style={{ width: '5rem' }} />
        </FloatingContainer1>
        <FloatingContainer2>
          <img src="./imgs/onion.png" alt="파" style={{ width: '10rem' }} />
        </FloatingContainer2>
        <FloatingContainer3>
          <img
            src="./imgs/banana.png"
            alt="바나나"
            style={{ width: '10rem' }}
          />
        </FloatingContainer3>

        <FormFieldset>
          <FormLabel htmlFor="cooking">음식명</FormLabel>
          <FormInput
            value={cooking}
            id="cooking"
            onChange={handleCookingChange}
            type="text"
            name="cooking"
            placeholder="음식명을 입력해주세요."
          />
        </FormFieldset>

        <FormFieldset>
          <FormLabel htmlFor="ingredients">식재료</FormLabel>
          <FormInput
            id="ingredients"
            value={ingredients}
            onChange={handleIngredientsChange}
            type="text"
            name="ingredients"
            placeholder="식재료를 콤마(,)로 구분해서 입력해주세요."
          />
        </FormFieldset>

        <ButtonContainer>
          <FormButton onClick={handleSubmit} buttonType="submit" type="button">
            레시피 추천받기
          </FormButton>
        </ButtonContainer>
      </FormContainer>

      <InfoContainer>
        <Info>
          <img style={{ width: '9rem' }} src="./imgs/logo.png" alt="로고"></img>
        </Info>
        <Info>
          <p>먹고 싶은 음식의 이름을 입력하세요!</p>
          <p>가지고 계신 식재료를 모두 입력하세요!</p>
          <p>레시피 추천받기 버튼을 눌러 결과를 확인하세요!</p>
        </Info>
        <Info>
          <p>된장찌개가 먹고 싶은데 가진 재료가 이것뿐이야!</p>
          <p>음식명 : 된장찌개</p>
          <p>식재료 : 된장, 간장, 상추, 토마토</p>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 3rem;
  border: none;
  border-radius: 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url('./imgs/ingredients.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;
const FormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0 1rem;
`;

const FormLabel = styled.label`
  display: flex;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  justify-content: center;
`;

const FormInput = styled.input`
  display: block;
  height: 2rem;
  width: 23rem;
  border: 2px solid #dee2e6;
  border-radius: 1rem;
  padding: 0 1rem;
  margin: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const FormButton = styled.button`
  margin: 1rem;
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
const InfoContainer = styled.div`
  width: 80%;
  margin: 1rem;
  background: #fff0ba;
  border-radius: 1rem;
  display: flex;
`;
const Info = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
`;

const FloatingContainer1 = styled.div`
  position: absolute;
  bottom: -30px;
  right: -100px;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FloatingContainer2 = styled.div`
  position: absolute;
  top: -7rem;
  left: 1rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FloatingContainer3 = styled.div`
  position: absolute;
  top: 10rem;
  right: -10rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
