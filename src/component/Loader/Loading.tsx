import React from 'react';
import s from './loader.module.scss';

function ScreenCenterSpinner() {
  return (
    <div className={s.screenCenter}>
      <div className={s.screenCenterSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
function Spinner0() {
  return (
    <div className={s.spinner0}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function Roller0() {
  return (
    <div className={s.roller0}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function Ripple0() {
  return (
    <div className={s.ripple0}>
      <div></div>
      <div></div>
    </div>
  );
}
export { ScreenCenterSpinner, Spinner0, Roller0, Ripple0 };
