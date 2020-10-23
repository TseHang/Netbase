import React from 'react';
import styled from 'styled-components';

const CardHeader: React.FC = () => {
  return (
    <Wrapper>
      <p>CARD</p>
      <Button>?</Button>
    </Wrapper>
  );
};

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

const Button = styled.button`
  position: absolute;
  right: 1rem;
  font-size: 1.5rem;
  font-weight: 900;
  opacity: 0.2;
  cursor: pointer;
`;

export default CardHeader;
