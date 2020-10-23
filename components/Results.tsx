import React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from '@/styles/theme';

type Props = {
  items: { name: string; count: number }[];
};

const Results: React.FC<Props> = ({ items }) => {
  return (
    <>
      <SecondTitle>TOP TERMS</SecondTitle>
      <ItemListWrapper>
        <TitleWrapper>
          <span className="title">TERMS</span>
          <span className="bar">% OF TOTAL POSTS</span>
          <span className="count"># OF POSTS</span>
        </TitleWrapper>
        {items.map(item => (
          <ItemWrapper key={item.name}>
            <span className="title">{item.name}</span>
            <span className="bar">
              <ItemBar percent={item.count} />
            </span>
            <span className="count">{item.count}</span>
          </ItemWrapper>
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

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin: 0.5rem 0;

  > .title {
    font-weight: bold;
    color: black;
  }
`;

const createStretchKeyframes = (percent: number) => keyframes`
  from { width: 0px; }
  to { width: ${percent}%; }
`;

const ItemBar = styled.div<{ percent: number }>`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: ${colors.gray[200]};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    animation: ${p => createStretchKeyframes(p.percent)} 1s ease-in-out forwards 0.3s;
    background-color: ${p => p.theme.colors.main};
  }
`;

export default Results;
