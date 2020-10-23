import React from 'react';
import styled from 'styled-components';

import Card from '@/components/Card';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default App;
