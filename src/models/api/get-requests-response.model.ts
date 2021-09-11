import { ICocktail } from "../cocktail.model";
import { IDrink } from "../drink.model";

export interface IDrinksData {
    drinks: Array<IDrink>;
};

export interface ICocktailData {
    drinks: Array<ICocktail>;
};