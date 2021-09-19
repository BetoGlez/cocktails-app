import { useState } from "react";

import { useCocktailsListsStore } from "../../../hooks/store/cocktails-lists-hooks";
import { ICocktail } from "../../../models/cocktail.model";

export interface ICocktailsListComponentProps {
    cocktails: Array<ICocktail>;
};

const MAX_INGREDIENTS_NUM = 15;

export const useCocktailsListComponent = () => {

    const {addCocktailToList} = useCocktailsListsStore();
    const [preselectedCocktail, setPreselectedCocktail] = useState<ICocktail>();

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

    const preselectCocktailForList = (cocktail: ICocktail): void => {
        setPreselectedCocktail(cocktail);
    };

    const cancelCocktailPreselection = (): void => {
        setPreselectedCocktail(undefined);
    };

    const handleAddCocktailToList = (listId: string, cocktail: ICocktail): void => {
        addCocktailToList(listId, cocktail);
        setPreselectedCocktail(undefined);
    };

    return {preselectedCocktail, composeCocktailIngredients, preselectCocktailForList, handleAddCocktailToList, cancelCocktailPreselection};
};