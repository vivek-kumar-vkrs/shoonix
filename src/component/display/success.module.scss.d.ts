declare namespace SuccessModuleScssNamespace {
  export interface ISuccessModuleScss {
    msg: string;
    title: string;
  }
}

declare const SuccessModuleScssModule: SuccessModuleScssNamespace.ISuccessModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SuccessModuleScssNamespace.ISuccessModuleScss;
};

export = SuccessModuleScssModule;
