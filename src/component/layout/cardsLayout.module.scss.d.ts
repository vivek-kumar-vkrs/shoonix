declare namespace CardsLayoutModuleScssNamespace {
  export interface ICardsLayoutModuleScss {
    responsifyCards: string;
    screenCenter: string;
  }
}

declare const CardsLayoutModuleScssModule: CardsLayoutModuleScssNamespace.ICardsLayoutModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardsLayoutModuleScssNamespace.ICardsLayoutModuleScss;
};

export = CardsLayoutModuleScssModule;
