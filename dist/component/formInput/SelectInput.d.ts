declare type PropsType = {
    label: string;
    options: Array<string>;
    disabled: boolean;
    stateToChange: string;
    state: {
        [key: string]: string | Array<string> | number;
    };
    setState: (newState: object) => void;
};
declare function SelectInput({ label, options, disabled, stateToChange, state, setState, }: PropsType): JSX.Element;
export default SelectInput;
