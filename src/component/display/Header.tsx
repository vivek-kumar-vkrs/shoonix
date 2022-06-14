import React from 'react';
// import { header, subHeader } from './header.module.scss';
import s from './header.module.scss';

type HeaderPropTypes = { headerText: string };
type SubHeaderPropTypes = { subHeaderText: string };

function Header({ headerText }: HeaderPropTypes) {
  return <p className={s.header}>{headerText}</p>;
}
function SubHeader({ subHeaderText }: SubHeaderPropTypes) {
  return <p className={s.subHeader}>{subHeaderText}</p>;
}

export { Header, SubHeader };
