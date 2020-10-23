import React from 'react';
import styled from 'styled-components';

import fakeData from '@/fakeData';

import Results from './Results';

type Props = {
  page: string;
};

const CardContent: React.FC<Props> = ({ page }) => {
  return (
    <Wrapper>
      {page ? `Content: ${page}` : <Results items={fakeData} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  background-color: white;
  min-height: 100px;
  display: flex;
  flex-direction: column;
`;

export default CardContent;
