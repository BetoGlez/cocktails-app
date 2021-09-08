export interface ICocktailsSearchComponentProps {};

export const enum COCKTAIL_CATEGORY {
    ALCOHOLIC = "alcoholic",
    NON_ALCOHOLIC = "nonAlcoholic"
};

export const useCocktailsSearchComponent = () => {
    const handleCategorySelectChange = (category: COCKTAIL_CATEGORY): void => {
        console.log("Selected category: ", category);
    };

    return { handleCategorySelectChange };
};