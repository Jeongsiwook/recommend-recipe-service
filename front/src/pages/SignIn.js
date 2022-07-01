import React, { useState } from 'react';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import * as Api from '../Api';

import styled from 'styled-components';

const SignIn = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'id':
        setId(e.target.value);
        break;
      case 'pw':
        setPw(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    try {
      const res = await Api.post('login', {
        email: id,
        password: pw,
      });

      const user = res.data;
      const jwtToken = user.token;

      sessionStorage.setItem('userToken', jwtToken);

      navigate('/home');
    } catch (e) {
      alert(
        '이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
      );
    }
  };
  return (
    <Container>
      <Logo />
      <FormContainer>
        <form>
          <Fieldset>
            <Label htmlFor="id"></Label>
            <Input
              value={id}
              id="id"
              onChange={handleChange}
              type="text"
              name="id"
              placeholder="이메일"
            ></Input>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="pw"></Label>
            <Input
              value={pw}
              id="pw"
              onChange={handleChange}
              type="password"
              name="pw"
              placeholder="비밀번호"
            ></Input>
          </Fieldset>

          <ButtonContainer>
            <Button onClick={handleSubmit} buttonType="submit" type="button">
              로그인
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #f5f6f7;
`;
const FormContainer = styled.div`
  width: 40%;
  border: 0.1rem solid #959595;
  border-radius: 1rem;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin: 1rem;
`;
const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem;
`;
const Input = styled.input`
  width: 25rem;
  height: 3rem;
  margin: 0 1rem;
  padding: 0 1rem;
`;
const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem;
`;
const Button = styled.button`
  width: 25rem;
  height: 3rem;
  font-size: 1.5rem;
  margin: 2rem;
  border: none;
  color: white;
  cursor: pointer;
  background: #e9967a;
`;
