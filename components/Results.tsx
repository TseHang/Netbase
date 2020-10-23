import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles/theme';

import ResultItem from './ResultItem';

export interface Item {
  name: string;
  count: number;
}

type Props = {
  items: Item[];
};

const Results: React.FC<Props> = ({ items }) => {
  return (
    <>
      <SecondTitle>TOP TERMS</SecondTitle>
      <ItemListWrapper>
        <TitleWrapper>
          <div className="title">TERMS</div>
          <div className="bar">% OF TOTAL POSTS</div>
          <div className="count"># OF POSTS</div>
        </TitleWrapper>
        {items.map(item => (
          <ResultItem key={item.name} item={item} />
        ))}
      </ItemListWrapper>
    </>
  );
};

const SecondTitle = styled.p`
  font-weight: bold;
  color: ${colors.gray[500]};
  margin: 0.5rem 1rem;
  font-size: 0.75rem;
`;

const ItemListWrapper = styled.div`
  overflow: scroll;
  padding: 0 1rem;

  .title {
    width: 25%;
  }

  .bar {
    width: 42%;
  }

  .count {
    text-align: right;
    width: 25%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 3px ${colors.gray[200]};
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-bottom: 3px;
  font-size: 0.75rem;

  > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default Results;
