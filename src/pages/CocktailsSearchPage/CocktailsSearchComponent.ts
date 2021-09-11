import { COCKTAIL_CATEGORY } from "../../models/cocktail.model";

export const useCocktailsSearchPage = () => {
    const handleCategorySelectChange = (category: COCKTAIL_CATEGORY): void => {
        console.log("Selected category: ", category);
    };

    return { handleCategorySelectChange };
};