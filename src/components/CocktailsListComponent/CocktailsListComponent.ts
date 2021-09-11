import { ICocktail } from "../../models/cocktail.model";

export interface ICocktailsListComponentProps {
    cocktails: Array<ICocktail>;
};

const MAX_INGREDIENTS_NUM = 15;

export const useCocktailsListComponent = () => {

    const composeCocktailIngredients = (cocktail: ICocktail): string => {
        let cocktailIngredients = "";
        for (let i = 1; i <= MAX_INGREDIENTS_NUM; i++) {
            const ingredient = cocktail[`strIngredient${i}` as keyof ICocktail];
            if (ingredient !== null) {
                cocktailIngredients = cocktailIngredients ? `${cocktailIngredients}, ${ingredient}` : ingredient;
            } else {
                break;
            }
        }
        return cocktailIngredients;
    };

    const addCocktailToList = (cocktailId: string): void => {
        console.log("Cocktail: ", cocktailId);
    };

    return { composeCocktailIngredients, addCocktailToList };
};