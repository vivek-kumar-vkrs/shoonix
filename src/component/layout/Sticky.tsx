import React from 'react';
import s from './sticky.module.scss';
// import { flexWrapper, leftBlock, rightBlock } from './sticky.module.scss';

type PropTypes = {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
};

function Sticky({ leftSide, rightSide }: PropTypes) {
  return (
    <div className={s.flexWrapper}>
      <div className={s.leftBlock}>{leftSide}</div>
      <div className={s.rightBlock}>{rightSide}</div>
    </div>
  );
}
export { Sticky };
