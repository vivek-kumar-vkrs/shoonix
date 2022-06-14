declare namespace FullScreenModalModuleScssNamespace {
  export interface IFullScreenModalModuleScss {
    fadeIn: string;
    modal: string;
    modalContainer: string;
    modalHeader: string;
    modalTitle: string;
  }
}

declare const FullScreenModalModuleScssModule: FullScreenModalModuleScssNamespace.IFullScreenModalModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FullScreenModalModuleScssNamespace.IFullScreenModalModuleScss;
};

export = FullScreenModalModuleScssModule;
