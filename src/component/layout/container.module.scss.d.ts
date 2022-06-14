declare namespace ContainerModuleScssNamespace {
  export interface IContainerModuleScss {
    container: string;
  }
}

declare const ContainerModuleScssModule: ContainerModuleScssNamespace.IContainerModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ContainerModuleScssNamespace.IContainerModuleScss;
};

export = ContainerModuleScssModule;
