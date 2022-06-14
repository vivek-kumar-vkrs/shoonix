declare namespace ImageSliderModuleScssNamespace {
  export interface IImageSliderModuleScss {
    goLeft: string;
    goRight: string;
    inlineFixSvg: string;
    slide: string;
    slider: string;
  }
}

declare const ImageSliderModuleScssModule: ImageSliderModuleScssNamespace.IImageSliderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ImageSliderModuleScssNamespace.IImageSliderModuleScss;
};

export = ImageSliderModuleScssModule;
