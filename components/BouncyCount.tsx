import React from 'react';
import { animated, useSpring } from 'react-spring';

const transform = (num: number) => Math.floor(num);

type Props = {
  count: number;
  delay?: number;
  duration?: number;
};

const BouncyCount: React.FC<Props> = ({ count, delay = 0, duration }) => {
  const props = useSpring({
    count,
    from: { count: 0 },
    config: {
      delay,
      duration,
    },
  });
  return <animated.span>{props.count.interpolate(transform)}</animated.span>;
};

export default BouncyCount;
