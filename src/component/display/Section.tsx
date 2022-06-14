import React from 'react';
// import { noMarginTop, noMarginBottom, section } from './section.module.scss';
import s from './section.module.scss';

type PropTypes = {
  children: React.ReactNode;
  zeroMarginTop: boolean;
  zeroMarginBottom: boolean;
};

function Section({ children, zeroMarginTop, zeroMarginBottom }: PropTypes) {
  if (zeroMarginTop) {
    return <div className={s.noMarginTop}>{children}</div>;
  } else if (zeroMarginBottom) {
    return <div className={s.noMarginBottom}>{children}</div>;
  } else {
    return <div className={s.section}>{children}</div>;
  }
}

export default Section;
