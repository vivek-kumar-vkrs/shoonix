declare namespace LoaderModuleScssNamespace {
  export interface ILoaderModuleScss {
    ripple0: string;
    roller0: string;
    screenCenter: string;
    screenCenterSpinner: string;
    spinner0: string;
  }
}

declare const LoaderModuleScssModule: LoaderModuleScssNamespace.ILoaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoaderModuleScssNamespace.ILoaderModuleScss;
};

export = LoaderModuleScssModule;
