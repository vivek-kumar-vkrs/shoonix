import React from 'react';
import s from './cardsLayout.module.scss';

type PropsType = { children: React.ReactNode };

function ScreenCenter({ children }: PropsType) {
  return <div className={s.screenCenter}>{children}</div>;
}

function ResponsifyCards({ children }: PropsType) {
  return <div className={s.responsifyCards}>{children}</div>;
}

export { ScreenCenter, ResponsifyCards };
