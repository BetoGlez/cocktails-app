import { ISelectCocktailListModalProps } from "./SelectCocktailListModal";
import MyCocktailsListsComponent from "../../MyCocktailsListsComponent";
import { ListItemActionEnum } from "../../MyCocktailsListsComponent/MyCocktailsListsComponent";

const SelectCocktailListModal: React.FC<ISelectCocktailListModalProps> = ({preselectedCocktail, onListCocktailSelect}) => {
    return (
        <MyCocktailsListsComponent listItemAction={ListItemActionEnum.SELECT}
            onListItemSelect={(listId) => onListCocktailSelect(listId, preselectedCocktail)} />
    );
};

export default SelectCocktailListModal;