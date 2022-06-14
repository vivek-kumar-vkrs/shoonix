declare type HeaderPropTypes = {
    headerText: string;
};
declare type SubHeaderPropTypes = {
    subHeaderText: string;
};
declare function Header({ headerText }: HeaderPropTypes): JSX.Element;
declare function SubHeader({ subHeaderText }: SubHeaderPropTypes): JSX.Element;
export { Header, SubHeader };
