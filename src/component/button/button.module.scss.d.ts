declare namespace ButtonModuleScssNamespace {
  export interface IButtonModuleScss {
    btn: string;
    btnDisabled: string;
    btnOutline: string;
    btnOutlineDisabled: string;
    hideVis: string;
  }
}

declare const ButtonModuleScssModule: ButtonModuleScssNamespace.IButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonModuleScssNamespace.IButtonModuleScss;
};

export = ButtonModuleScssModule;
