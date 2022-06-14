declare type PropTypes = {
    label: string;
    stateToChange: string;
    state: {
        [key: string]: string | Array<string> | number;
    };
    setState: (newState: object) => void;
};
declare function TextInput({ label, stateToChange, state, setState }: PropTypes): JSX.Element;
export default TextInput;
