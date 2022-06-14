declare type PropTypes = {
    label: string;
    checked: boolean;
    handleChange: () => void;
};
declare function Checkbox({ label, checked, handleChange }: PropTypes): JSX.Element;
export { Checkbox };
