import { ISelectCocktailListModalProps } from "./SelectCocktailListModal";
import MyCocktailsListsComponent from "../../MyCocktailsListsComponent";
import { ListItemActionEnum } from "../../MyCocktailsListsComponent/MyCocktailsListsComponent";

const SelectCocktailListModal: React.FC<ISelectCocktailListModalProps> = ({preselectedCocktail, onListCocktailSelect}) => {
    return (
        <div className="main-container">
            <MyCocktailsListsComponent listItemAction={ListItemActionEnum.SELECT}
                onListItemSelect={(listId) => onListCocktailSelect(listId, preselectedCocktail)} />
        </div>
    );
};

export default SelectCocktailListModal;