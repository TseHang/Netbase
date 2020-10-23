import React from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from '@/styles/theme';

import BouncyCount from './BouncyCount';
import { Item } from './Results';

type Props = {
  item: Item;
};

const ResultItem: React.FC<Props> = ({ item }) => {
  return (
    <ItemWrapper>
      <div className="title">{item.name}</div>
      <div className="bar">
        <ItemBar percent={item.count} />
        <Count>
          <BouncyCount delay={300} duration={1000} count={item.count} />%
        </Count>
      </div>
      <div className="count">{item.count}</div>
    </ItemWrapper>
  );
};

export default ResultItem;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin: 0.5rem 0;

  > .title {
    font-weight: bold;
    color: black;
  }

  > .bar {
    position: relative;
    height: 25px;
  }
`;

const createStretchKeyframes = (percent: number) => keyframes`
  from { width: 0px; }
  to { width: ${percent}%; }
`;

const ItemBar = styled.div<{ percent: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${colors.gray[200]};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    animation: ${p => createStretchKeyframes(p.percent)} 1s ease-in-out forwards
      0.3s;
    background-color: ${p => p.theme.colors.main};
  }
`;

const Count = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  font-weight: bold;
  font-size: 0.75rem;
  transform: translate3d(0, -50%, 0);
`;
