import { ICocktail } from "../../models/cocktail.model";
import { addCocktailToListActionCreator, createNewCocktailListActionCreator } from "../../store/cocktails-lists-data/cocktailsListsDataSlice";
import { useAppDispatch, useAppSelector } from "../common/store-config-hooks";

export const useCocktailsListsStore = () => {
    const { cocktailsLists } = useAppSelector(state => state.cocktailsListsData);
    const dispatch = useAppDispatch();

    const createCocktailList = (title: string, description: string): void => {
        dispatch(createNewCocktailListActionCreator({title, description}));
        console.log("New list saved: ", {title, description});
    };

    const addCocktailToList = (listId: string, newCocktail: ICocktail): void => {
        dispatch(addCocktailToListActionCreator({listId, newCocktail}));
        console.log("Cocktail added: ", newCocktail.strDrink);
    };

    return { cocktailsLists, createCocktailList, addCocktailToList };
};