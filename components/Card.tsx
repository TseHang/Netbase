import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import fakeData from '@/fakeData';

import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardSecondHeader from './CardSecondHeader';
import { Item } from './Results';

const sleep = async (delay: number) =>
  new Promise(resolve => setTimeout(resolve, delay));

const Card = () => {
  let page: string = '';

  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    async function getDate() {
      await sleep(500);
      setData(fakeData);
    }
    getDate();
  }, []);

  if (process.browser) {
    const parsed = queryString.parse(location.search);
    page = parsed.page as string;
  }

  return (
    <Wrapper>
      {data.length ? (
        <>
          <CardHeader />
          <CardSecondHeader page={page} />
          <CardContent page={page} items={data} />
          <CardFooter />
        </>
      ) : (
        <div>loading...</div>
      )}
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
