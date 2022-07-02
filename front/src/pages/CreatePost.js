import React from 'react';
import Nav from '../components/Nav';

import styled from 'styled-components';

const CreatePost = () => {
  return (
    <Container>
      <Nav />
    </Container>
  );
};

export default CreatePost;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: whitesmoke;
  z-index: -1;
`;
