import { ISelectCocktailListModalProps } from "./SelectCocktailListModal";
import MyCocktailsListsComponent from "../../lists/MyCocktailsListsComponent";
import { ListItemActionEnum } from "../../lists/MyCocktailsListsComponent/MyCocktailsListsComponent";

// Tip 6: Object destructuring makes life easier
const SelectCocktailListModal: React.FC<ISelectCocktailListModalProps> = (props) => {
    return (
        <MyCocktailsListsComponent listItemAction={ListItemActionEnum.SELECT}
            onListItemSelect={(listId) => props.onListCocktailSelect(listId, props.preselectedCocktail)} />
    );
};

export default SelectCocktailListModal;