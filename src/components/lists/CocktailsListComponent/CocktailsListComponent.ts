import { useState } from "react";

import { useCocktailsListsStore } from "../../../hooks/store/cocktails-lists-hooks";
import { ICocktail } from "../../../models/cocktail.model";

export interface ICocktailsListComponentProps {
    cocktails: Array<ICocktail>;
};

export const useCocktailsListComponent = () => {

    const {addCocktailToList} = useCocktailsListsStore();
    const [preselectedCocktail, setPreselectedCocktail] = useState<ICocktail>();

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

    return {preselectedCocktail, preselectCocktailForList, handleAddCocktailToList, cancelCocktailPreselection};
};