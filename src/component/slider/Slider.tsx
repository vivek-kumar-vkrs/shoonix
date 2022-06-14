import React, { useState } from 'react';
import cls from './slider.module.scss';

type PropTypes = { slideData: Array<JSX.Element> };

function Slider({ slideData }: PropTypes) {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (slideData.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (slideData.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className={cls.slider}>
      {slideData.map((item, index) => (
        <div
          style={{ transform: `translateX(${x}%)` }}
          key={index}
          className={cls.slide}
        >
          {item}
        </div>
      ))}
      <button id="goLeft" className={cls.goLeft} onClick={goLeft}>
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
      </button>
      <button id="goRight" className={cls.goRight} onClick={goRight}>
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
      </button>
    </div>
  );
}

export { Slider };
