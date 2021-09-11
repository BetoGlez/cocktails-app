import { CocktailTypeEnum } from "../cocktail.model";

export interface IGetDrinkFiltersParams {
    a: CocktailTypeEnum;
};

export interface IGetDrinkLookupParams {
    i: string;
};