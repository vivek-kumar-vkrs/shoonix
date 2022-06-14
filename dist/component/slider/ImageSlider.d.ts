declare type PropTypes = {
    slideData: Array<JSX.Element>;
    InfiniteLoop: boolean;
    duration: number;
};
declare function ImageSlider({ slideData, InfiniteLoop, duration }: PropTypes): JSX.Element;
export { ImageSlider };
