import { useQuery } from "react-query";

import { QueryKeys } from "../../api-client/api-constants";
import { getFilteredDrinks } from "../../api-client/requests/gets";
import { CocktailTypeEnum, ICocktail } from "../../models/cocktail.model";

export const useGetCocktails = (cockatilType: CocktailTypeEnum) => {
    const {data, isLoading} = useQuery([QueryKeys.COCKTAILS, {a: cockatilType}], () => getFilteredDrinks({a: cockatilType}));

    return { cocktails: data || new Array<ICocktail>(), isLoading };
};