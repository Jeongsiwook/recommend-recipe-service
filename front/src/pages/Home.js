// 홈
import React, { useState } from 'react';
import Nav from '../components/Nav';
import styled, { css } from 'styled-components';

const InputStatus = {
  NORMAL: 'normal',
  ERROR: 'error',
  SUCCESS: 'success',
};

const Home = () => {
  const [cooking, setCooking] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const [cookingError, setCookingError] = useState(null);
  const [ingredientsError, setIngredientsError] = useState(null);

  const [cookingInputStatus, setCookingInputStatus] = useState(
    InputStatus.NORMAL
  );
  const [ingredientsInputStatus, setIngredientsInputStatus] = useState(
    InputStatus.NORMAL
  );

  const handleCookingChange = (e) => {
    setCooking(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const validateCooking = (cooking) => {
    if (cooking.length < 1 || cooking.length > 10) {
      setCookingError('이름은 1글자 이상, 10글자 이하여야 합니다.');
      setCookingInputStatus(InputStatus.ERROR);
      return;
    }

    setCookingInputStatus(InputStatus.SUCCESS);
  };

  const validateIngredients = (ingredient) => {
    setIngredientsInputStatus(InputStatus.SUCCESS);
  };

  const validateForm = (form) => {
    validateCooking(form.cooking);
    validateIngredients(form.ingredients);
  };

  const handleSubmit = () => {
    const ingredientsPreprocessing = ingredients
      .split(',')
      .map((ingredient) => ingredient.trim());

    const formData = { cooking, ingredientsPreprocessing };
    validateForm(formData);
  };

  return (
    <Container>
      <Nav />
      <FormContainer>
        <FormFieldset>
          <FormLabel
            error={cookingInputStatus === InputStatus.ERROR}
            htmlFor="cooking"
          >
            음식명
          </FormLabel>
          <FormInput
            value={cooking}
            id="cooking"
            onChange={handleCookingChange}
            type="text"
            name="cooking"
            status={cookingInputStatus}
            placeholder="음식명을 입력해주세요."
          />

          <FormError>
            {cookingInputStatus === InputStatus.ERROR && cookingError}
          </FormError>
        </FormFieldset>

        <FormFieldset>
          <FormLabel
            error={ingredientsInputStatus === InputStatus.ERROR}
            htmlFor="ingredients"
          >
            식재료
          </FormLabel>
          <FormInput
            id="ingredients"
            value={ingredients}
            onChange={handleIngredientsChange}
            type="text"
            name="ingredients"
            status={ingredientsInputStatus}
            placeholder="식재료를 콤마(,)로 구분해서 입력해주세요."
          />

          <FormError>
            {ingredientsInputStatus === InputStatus.ERROR && ingredientsError}
          </FormError>
        </FormFieldset>

        <ButtonContainer>
          <FormButton onClick={handleSubmit} buttonType="submit" type="button">
            레시피 추천받기
          </FormButton>
        </ButtonContainer>
      </FormContainer>
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
  height: 40rem;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
`;
const FormFieldset = styled.fieldset`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  border: none;
  padding: 12px 0;
  margin: 1rem;

  &:not(:first-of-type) {
    border-bottom: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
const textError = css`
  color: #ff6b6b;
`;
const FormLabel = styled.label`
  display: block;
  padding-bottom: 8px;
  font-size: 2rem;
  ${(props) => props.error && textError}
`;

const inputInvalid = css`
  border: 2px solid #ff6b6b;
  width: 50%;
  height: 1.5rem;
`;
const inputValid = css`
  border: 2px solid #51cf66;
  width: 50%;
  height: 1.5rem;
`;
const FormInput = styled.input`
  display: block;
  padding: 4px;
  border: 2px solid #dee2e6;
  border-radius: 3px;

  ${({ status }) => status === InputStatus.ERROR && inputInvalid}
  ${({ status }) => status === InputStatus.SUCCESS && inputValid}
`;

const FormError = styled.div`
  font-size: 0.8rem;
  min-height: 20px;
  margin-top: 4px;
  color: #ff6b6b;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const FormButton = styled.button`
  margin: 1rem 0;
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
`;
