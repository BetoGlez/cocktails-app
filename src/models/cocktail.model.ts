export const enum COCKTAIL_CATEGORY {
    ALCOHOLIC = "alcoholic",
    NON_ALCOHOLIC = "nonAlcoholic"
};

export interface ICocktail {
    id: string;
    imgUrl: string;
    name: string;
    ingredients: string;
};