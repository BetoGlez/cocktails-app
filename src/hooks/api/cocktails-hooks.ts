import { useQuery } from "react-query";

import { QueryKeys } from "../../api-client/api-constants";
import { getFilteredDrinks } from "../../api-client/requests/gets";
import { CocktailTypeEnum, ICocktail } from "../../models/cocktail.model";

// Tip 4: Separate the model and presentation layer
export const useGetCocktails = (cockatilType: CocktailTypeEnum) => {
    // TIP 9: Always include React Query keys
    const {data, isLoading} = useQuery([QueryKeys.COCKTAILS, {a: cockatilType}], () => getFilteredDrinks({a: cockatilType}));

    return { cocktails: data || new Array<ICocktail>(), isLoading };
};