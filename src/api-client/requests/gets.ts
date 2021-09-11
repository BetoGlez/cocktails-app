import { axiosApp } from "../axios-config";
import { composeCocktailsList } from "./utilities";
import { ApiPaths } from "../api-constants";
import { IGetDrinkFiltersParams, IGetDrinkLookupParams } from "../../models/api/get-requests-params.model";
import { ICocktailData, IDrinksData } from "../../models/api/get-requests-response.model";
import { ICocktail } from "../../models/cocktail.model";

export const getFilteredDrinks = async (params: IGetDrinkFiltersParams): Promise<Array<ICocktail>> => {
    const drinksData = (await axiosApp.get<IDrinksData>(ApiPaths.FILTER, {params})).data;
    return await composeCocktailsList(drinksData.drinks);
};

export const getCocktail = async (params: IGetDrinkLookupParams): Promise<ICocktailData> => {
    return (await axiosApp.get<ICocktailData>(ApiPaths.LOOKUP, {params})).data;
};