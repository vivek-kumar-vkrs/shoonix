declare type PropTypes = {
    title: string;
    text: string;
    url: string;
    iconSize?: string;
};
declare function ShareButton({ title, text, url, iconSize }: PropTypes): JSX.Element;
export default ShareButton;
