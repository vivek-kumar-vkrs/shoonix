declare namespace FlexModuleScssNamespace {
  export interface IFlexModuleScss {
    flexWrapJCenter: string;
    jaCenter: string;
    jaCenterCol: string;
    jaCenterColM12JSpBwRow: string;
    jaCenterColM12Row: string;
    jaCenterColM7JSpBwRow: string;
    jaCenterColM7Row: string;
    jaSpBwCenter: string;
    showAfterM12: string;
    showAfterM18: string;
    showAfterM7: string;
    showBwM12M18: string;
    showBwM7M12: string;
    showUptoM7: string;
  }
}

declare const FlexModuleScssModule: FlexModuleScssNamespace.IFlexModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FlexModuleScssNamespace.IFlexModuleScss;
};

export = FlexModuleScssModule;
