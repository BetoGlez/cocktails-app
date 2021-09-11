import { getCocktail } from "./gets";
import { ICocktailData } from "../../models/api/get-requests-response.model";
import { ICocktail } from "../../models/cocktail.model";
import { IDrink } from "../../models/drink.model";

export const composeCocktailsList = async (drinks: Array<IDrink>): Promise<Array<ICocktail>> => {
    const cocktailsPromises = new Array<Promise<ICocktailData>>();
    drinks.forEach(drink => {
        cocktailsPromises.push(getCocktail({i: drink.idDrink}));
    });
    return (await Promise.all(cocktailsPromises)).map(cocktailData => cocktailData.drinks[0]);
};