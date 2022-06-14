import React from 'react';
import cls from './container.module.scss';

type PropsType = { children: React.ReactNode };
function Container({ children }: PropsType) {
  return <div className={cls.container}>{children}</div>;
}

export { Container };
