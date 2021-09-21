import { ISelectCocktailListModalProps } from "./SelectCocktailListModal";
import MyCocktailsListsComponent from "../../lists/MyCocktailsListsComponent";
import { ListItemActionEnum } from "../../lists/MyCocktailsListsComponent/MyCocktailsListsComponent";

// Tip 6: Object destructuring makes life easier
const SelectCocktailListModal: React.FC<ISelectCocktailListModalProps> = ({preselectedCocktail, onListCocktailSelect}) => {
    return (
        <MyCocktailsListsComponent listItemAction={ListItemActionEnum.SELECT}
            onListItemSelect={(listId) => onListCocktailSelect(listId, preselectedCocktail)} />
    );
};

export default SelectCocktailListModal;