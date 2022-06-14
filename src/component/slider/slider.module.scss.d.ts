declare namespace SliderModuleScssNamespace {
  export interface ISliderModuleScss {
    goLeft: string;
    goRight: string;
    slide: string;
    slider: string;
  }
}

declare const SliderModuleScssModule: SliderModuleScssNamespace.ISliderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SliderModuleScssNamespace.ISliderModuleScss;
};

export = SliderModuleScssModule;
