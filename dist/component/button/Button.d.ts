import React from 'react';
declare type ButtonProps = {
    onClick?: (ev?: any) => void;
    text?: string;
    state?: 'loading' | 'disable';
    children?: React.ReactNode;
};
declare const Button: ({ onClick, text, state, children }: ButtonProps) => JSX.Element;
declare const ButtonOutline: ({ onClick, text, state, children }: ButtonProps) => JSX.Element;
export { Button, ButtonOutline };
