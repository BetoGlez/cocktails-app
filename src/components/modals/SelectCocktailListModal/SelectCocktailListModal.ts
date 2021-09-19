import { ICocktail } from "../../../models/cocktail.model";

export interface ISelectCocktailListModalProps {
    preselectedCocktail: ICocktail;
    onListCocktailSelect: (listId: string, cocktail: ICocktail) => void;
}