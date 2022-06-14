declare type PropTypes = {
    modalId: string;
    show: boolean;
    resetShow: () => void;
    title?: string;
    customTitle?: JSX.Element;
    children: JSX.Element;
};
declare function FullScreenModal({ modalId, show, resetShow, title, customTitle, children, }: PropTypes): JSX.Element;
export { FullScreenModal };
