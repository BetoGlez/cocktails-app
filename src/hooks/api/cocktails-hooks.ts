import { useQuery } from "react-query";

import { QueryKeys } from "../../api-client/api-constants";
import { getFilteredDrinks } from "../../api-client/requests/gets";
import { CocktailTypeEnum, ICocktail } from "../../models/cocktail.model";

export const useGetCocktails = (cockatilType: CocktailTypeEnum) => {
    const {data, isLoading} = useQuery([QueryKeys.COCKTAILS, {a: cockatilType}], () => getFilteredDrinks({a: cockatilType}));

    const composeCocktails = (rawCocktails?: Array<ICocktail>) => {
        let cocktails = new Array<ICocktail>();
        if (rawCocktails) {
            cocktails = rawCocktails;
        }
        return cocktails;
    };

    return { cocktails: composeCocktails(data), isLoading };
};