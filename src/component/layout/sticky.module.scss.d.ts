declare namespace StickyModuleScssNamespace {
  export interface IStickyModuleScss {
    flexWrapper: string;
    leftBlock: string;
    rightBlock: string;
  }
}

declare const StickyModuleScssModule: StickyModuleScssNamespace.IStickyModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StickyModuleScssNamespace.IStickyModuleScss;
};

export = StickyModuleScssModule;
