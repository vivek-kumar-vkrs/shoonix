import React from 'react';
import s from './flex.module.scss';

type PropsType = { children: React.ReactNode };

function JACenter({ children }: PropsType) {
  return <div className={s.jaCenter}>{children}</div>;
}

function JACenterCol({ children }: PropsType) {
  return <div className={s.jaCenterCol}>{children}</div>;
}

function JASpBw({ children }: PropsType) {
  return <div className={s.jaSpBwCenter}>{children}</div>;
}

function JACenterColM7Row({ children }: PropsType) {
  return <div className={s.jaCenterColM7Row}>{children}</div>;
}

function JACenterColM7JSpBwRow({ children }: PropsType) {
  return <div className={s.jaCenterColM7JSpBwRow}>{children}</div>;
}

function JACenterColM12Row({ children }: PropsType) {
  return <div className={s.jaCenterColM12Row}>{children}</div>;
}

function JACenterColM12JSpBwRow({ children }: PropsType) {
  return <div className={s.jaCenterColM12JSpBwRow}>{children}</div>;
}

function FlexWrapJCenter({ children }: PropsType) {
  return <div className={s.flexWrapJCenter}>{children}</div>;
}

function ShowAfterM7({ children }: PropsType) {
  return <div className={s.showAfterM7}>{children}</div>;
}
function ShowAfterM12({ children }: PropsType) {
  return <div className={s.showAfterM12}>{children}</div>;
}
function ShowAfterM18({ children }: PropsType) {
  return <div className={s.showAfterM18}>{children}</div>;
}

function ShowUptoM7({ children }: PropsType) {
  return <div className={s.showUptoM7}>{children}</div>;
}

function ShowBwM7M12({ children }: PropsType) {
  return <div className={s.showBwM7M12}>{children}</div>;
}

function ShowBwM12M18({ children }: PropsType) {
  return <div className={s.showBwM12M18}>{children}</div>;
}

export {
  JACenter,
  JACenterCol,
  JASpBw,
  JACenterColM7Row,
  JACenterColM7JSpBwRow,
  JACenterColM12Row,
  JACenterColM12JSpBwRow,
  FlexWrapJCenter,
  ShowAfterM7,
  ShowAfterM12,
  ShowAfterM18,
  ShowUptoM7,
  ShowBwM7M12,
  ShowBwM12M18,
};
