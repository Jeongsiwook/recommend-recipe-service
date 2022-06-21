import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from '../Api';

import styled from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [rePw, setRePw] = useState('');
  const [name, setName] = useState('');

  const handleLogoClick = () => navigate('/home');
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'id':
        setId(e.target.value);
        break;
      case 'pw':
        setPw(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'rePw':
        setRePw(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async () => {
    try {
      await Api.post('users', {
        name,
        email: id,
        password: pw,
      });
    } catch (e) {
      alert('이미 존재하거나 사용할 수 없는 ID 입니다.');
    }
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImg
          onClick={handleLogoClick}
          src="./imgs/logo.png"
          alt="logo"
        ></LogoImg>
      </LogoContainer>
      <FormContainer>
        <form>
          <Fieldset>
            <Label htmlFor="id">아이디</Label>
            <Input
              value={id}
              id="id"
              onChange={handleChange}
              type="text"
              name="id"
              placeholder="5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."
            ></Input>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="pw">비밀번호</Label>
            <Input
              value={pw}
              id="pw"
              onChange={handleChange}
              type="password"
              name="pw"
              placeholder="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
            ></Input>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="rePw">비밀번호 재확인</Label>
            <Input
              value={rePw}
              id="rePw"
              onChange={handleChange}
              type="password"
              name="rePw"
            ></Input>
          </Fieldset>
          <Fieldset>
            <Label htmlFor="name">이름</Label>
            <Input
              value={name}
              id="name"
              onChange={handleChange}
              type="text"
              name="name"
            ></Input>
          </Fieldset>

          <ButtonContainer>
            <Button onClick={handleSubmit} buttonType="submit" type="button">
              가입하기
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #f5f6f7;
`;
const LogoContainer = styled.div`
  width: 80%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 20rem;
  cursor: pointer;
`;
const FormContainer = styled.div`
  width: 80%;
  margin: 1rem;
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
