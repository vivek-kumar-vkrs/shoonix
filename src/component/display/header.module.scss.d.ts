declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    header: string;
    subHeader: string;
    titleD5: string;
    titleD5AlignCenter: string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModuleScssNamespace.IHeaderModuleScss;
};

export = HeaderModuleScssModule;
