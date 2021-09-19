import { ICocktailList } from "../../models/cocktail-list.model";
import { ICocktailsListsData } from "../../models/store/cocktails-lists-data.model";

export const COCKTAILS_LISTS_DATA_INITIAL_STATE: ICocktailsListsData = {
    cocktailsLists: new Array<ICocktailList>()
};