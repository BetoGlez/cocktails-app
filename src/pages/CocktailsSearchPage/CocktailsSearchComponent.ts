import { useState } from "react";

import { CocktailTypeEnum } from "../../models/cocktail.model";

export const useCocktailsSearchPage = () => {
    const [selectedCocktailType, setSelectedCocktailType] = useState(CocktailTypeEnum.ALCOHOLIC);

    const handleCategorySelectChange = (cocktailType: CocktailTypeEnum): void => {
        console.log("Selected category: ", cocktailType);
        setSelectedCocktailType(cocktailType);
    };

    return { selectedCocktailType, handleCategorySelectChange };
};