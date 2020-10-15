import React from 'react';
import { useSpring, animated,config } from 'react-spring';

const bars = [
  {
    key: 'bar1',
    color: 'green',
    from: {
      width: '0px',
    },
    to: {
      width: '100px',
    },
    config: {
      mass: 20,
    },
  },
  {
    key: 'bar2',
    color: 'blue',
    from: {
      width: '0px',
    },
    to: {
      width: '250px',
    },
    config: {
      mass: 30,
    },
  },
  {
    key: 'bar3',
    color: 'red',
    from: {
      width: '0px',
    },
    to: {
      width: '150px',
    },
    config: {
      mass: 13,
    },
  },
];



const BarGraph = () => {
  const springs = useSpring(
    config.default
  );

  return <animated.div
      style={{...springs,backgroundColor: "red", width: "100px", height: "100px"}}
    />

};

export default BarGraph;