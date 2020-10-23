import React from 'react';
import styled from 'styled-components';

import Results, { Item } from './Results';

type Props = {
  page: string;
  items: Item[];
};

const CardContent: React.FC<Props> = ({ page, items }) => {
  return (
    <Wrapper>{page ? `Content: ${page}` : <Results items={items} />}</Wrapper>
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
