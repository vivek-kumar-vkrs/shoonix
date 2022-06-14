import React from 'react';
import s from './button.module.scss';
// const { btn, btnDisabled, btnOutline, btnOutlineDisabled } = s;
type ButtonProps = {
  onClick?: (ev?: any) => void;
  text?: string;
  state?: 'loading' | 'disable';
  children?: React.ReactNode;
};

const Button = ({ onClick, text, state, children }: ButtonProps) => {
  if (state === 'disable') {
    return (
      <button className={s.btnDisabled}>
        {text && text}
        {!text && children && children}
      </button>
    );
  } else if (state === 'loading') {
    return (
      <button className={s.btn}>
        <LoadingSVG />
      </button>
    );
  } else if (onClick) {
    return (
      <button className={s.btn} onClick={onClick}>
        {text && text}
        {!text && children && children}
      </button>
    );
  } else {
    return (
      <button className={s.btn}>
        {text && text}
        {!text && children && children}
      </button>
    );
  }
};

const ButtonOutline = ({ onClick, text, state, children }: ButtonProps) => {
  if (state === 'disable') {
    return (
      <button className={s.btnOutlineDisabled}>
        {text && text}
        {!text && children && children}
      </button>
    );
  } else if (state === 'loading') {
    return (
      <button className={s.btnOutline}>
        <LoadingSVG />
      </button>
    );
  } else if (onClick) {
    return (
      <button className={s.btnOutline} onClick={onClick}>
        {text && text}
        {!text && children && children}
      </button>
    );
  } else {
    return (
      <button className={s.btnOutline}>
        {text && text}
        {!text && children && children}
      </button>
    );
  }
};

const LoadingSVG = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24px"
      height="16px"
      viewBox="0 0 24 30"
    >
      <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 20; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 5; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
export { Button, ButtonOutline };
