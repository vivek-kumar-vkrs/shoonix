declare type PropsType = {
    label: string;
    stateToChange: string;
    state: {
        [key: string]: string | Array<string> | number;
    };
    setState: (newState: object) => void;
};
declare function TextAreaInput({ label, stateToChange, state, setState }: PropsType): JSX.Element;
export default TextAreaInput;
