declare namespace SwitchBtnModuleScssNamespace {
  export interface ISwitchBtnModuleScss {
    switchBtn: string;
  }
}

declare const SwitchBtnModuleScssModule: SwitchBtnModuleScssNamespace.ISwitchBtnModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SwitchBtnModuleScssNamespace.ISwitchBtnModuleScss;
};

export = SwitchBtnModuleScssModule;
