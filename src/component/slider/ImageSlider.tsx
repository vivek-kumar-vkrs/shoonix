import React, { useEffect, useState } from 'react';
import s from './imageSlider.module.scss';

type PropTypes = {
  slideData: Array<JSX.Element>;
  InfiniteLoop: boolean;
  duration: number;
};

function ImageSlider({ slideData, InfiniteLoop, duration }: PropTypes) {
  const [x, setX] = useState(0);
  if (!duration) {
    duration = 3000;
  }
  const goLeft = () => {
    if (InfiniteLoop) {
      x === 0 ? setX(-100 * (slideData.length - 1)) : setX(x + 100);
    } else {
      return x === 0 ? '' : setX(x + 100);
    }
    return true;
  };
  const goRight = () => {
    if (InfiniteLoop) {
      x === -100 * (slideData.length - 1) ? setX(0) : setX(x - 100);
    } else {
      return x === -100 * (slideData.length - 1) ? '' : setX(x - 100);
    }
  };

  useEffect(() => {
    const timerID = setTimeout(() => {
      x === -100 * (slideData.length - 1) ? setX(0) : setX(x - 100);
    }, duration);

    return () => {
      clearTimeout(timerID);
    };
  }, [x]);

  return (
    <div className={s.slider}>
      {slideData.map((item, index) => (
        <div
          style={{ transform: `translateX(${x}%)` }}
          key={index}
          className={s.slide}
        >
          {item}
        </div>
      ))}
      <button className={s.goLeft} onClick={goLeft}>
        <LeftArrowIcon />
      </button>
      <button className={s.goRight} onClick={goRight}>
        <RightArrowIcon />
      </button>
    </div>
  );
}
const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 20 20"
  >
    <path d="M14 5l-5 5l5 5l-1 2l-7-7l7-7z" fill="#626262" />
    <rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 20 20"
  >
    <path d="M6 15l5-5l-5-5l1-2l7 7l-7 7z" fill="#626262" />
    <rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" />
  </svg>
);

export { ImageSlider };
