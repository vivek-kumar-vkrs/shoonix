declare namespace FormModuleScssNamespace {
  export interface IFormModuleScss {
    formControl: string;
    formControlbkp: string;
    formGroup: string;
    label: string;
  }
}

declare const FormModuleScssModule: FormModuleScssNamespace.IFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FormModuleScssNamespace.IFormModuleScss;
};

export = FormModuleScssModule;
