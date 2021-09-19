import { ICocktail } from "./cocktail.model";

export interface ICocktailList {
    id: string;
    title: string;
    description: string;
    cocktails: Array<ICocktail>;
}