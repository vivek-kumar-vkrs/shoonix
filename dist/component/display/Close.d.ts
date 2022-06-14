declare type ClosePropTypes = {
    clickHandler: () => void;
    size?: string;
    fill?: string;
};
declare function Close({ clickHandler, size, fill }: ClosePropTypes): JSX.Element;
export { Close };
