declare namespace SelectInputModuleScssNamespace {
  export interface ISelectInputModuleScss {
    formControl: string;
    label: string;
  }
}

declare const SelectInputModuleScssModule: SelectInputModuleScssNamespace.ISelectInputModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SelectInputModuleScssNamespace.ISelectInputModuleScss;
};

export = SelectInputModuleScssModule;
