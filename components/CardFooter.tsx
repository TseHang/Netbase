import React from 'react';
import styled from 'styled-components';

const CardFooter = () => {
  return <Wrapper>footer</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: ${p => p.theme.colors.secondary};
  color: white;

  > p {
    margin: 0;
    font-weight: bold;
  }
`;

export default CardFooter;