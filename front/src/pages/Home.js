// 홈
import React, { useState } from 'react';
import Nav from '../components/Nav';
import styled, { css } from 'styled-components';

// const floatingObject = (selector, delay, size) => {
//   gsap.to(
//     selector, // 선택자
//     random(1.5, 2.5), // 애니메이션 동작 시간
//     {
//       // 옵션
//       y: size,
//       repeat: -1,
//       yoyo: true,
//       ease: Power1.easeInout,
//       delay: random(0, delay),
//     }
//   );
// };

const Home = () => {
  const [cooking, setCooking] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleCookingChange = (e) => {
    setCooking(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = () => {
    const ingredientsPreprocessing = ingredients
      .split(',')
      .map((ingredient) => ingredient.trim());

    const formData = { cooking, ingredientsPreprocessing };
  };

  return (
    <Container>
      <Nav />
      <FormContainer>
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
        <div>
          <p>이왜맛?</p>
        </div>
        <Info></Info>
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
  &:hover {
    background: #ff8339;
  }
`;
const InfoContainer = styled.div`
  width: 80%;
  height: 150px;
  background: #fff0ba;
  border-radius: 1rem;
`;
const Info = styled.div``;
