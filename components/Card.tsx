import queryString from 'query-string';
import React from 'react';
import styled from 'styled-components';

import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardSecondHeader from './CardSecondHeader';

const Card = () => {
  let page: string = '';
  
  if (process.browser) {
    const parsed = queryString.parse(location.search);
    page = parsed.page as string;
  }

  return (
    <Wrapper>
      <CardHeader/>
      <CardSecondHeader page={page}/>
      <CardContent page={page}/>
      <CardFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  border: solid 2px ${p => p.theme.colors.border};
`;

export default Card;
