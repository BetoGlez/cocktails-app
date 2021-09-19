import { useCocktailsListsStore } from "../../../hooks/store/cocktails-lists-hooks";

export interface IMyCocktailsListsComponentProps {
    listItemAction: ListItemActionEnum;
    onListItemSelect?: (listId: string) => void;
}

export enum ListItemActionEnum {
    SELECT = "select",
    DELETE = "delete"
}

export const MAX_AVATAR_GROUPS = 2;
export const AVATAR_GROUP_STYLE = { color: "#f56a00", backgroundColor: "#fde3cf" };
const AVATAR_STYLES = [
    { backgroundColor: "#1890ff", color: "#fff" },
    { backgroundColor: "#87d068", color: "#fff" },
    { backgroundColor: "#0fa768", color: "#fff" },
    { backgroundColor: "#8f89f3", color: "#fff" },
    { backgroundColor: "#f0af1d", color: "#fff" }
];

export const useMyCocktailsListsComponent = ({onListItemSelect}: IMyCocktailsListsComponentProps) => {

    const {deleteCocktailList} = useCocktailsListsStore();

    const generateIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    const getAvatarStyle = () => {
        return AVATAR_STYLES[ generateIntFromInterval(0, AVATAR_STYLES.length - 1) ];
    };

    const handleListItemAction = (listId: string, action: ListItemActionEnum): void => {
        switch (action) {
        case ListItemActionEnum.SELECT:
            if (onListItemSelect) {
                onListItemSelect(listId);
            }
            break;
        case ListItemActionEnum.DELETE:
            deleteCocktailList(listId);
            break;
        }
    };

    return {getAvatarStyle, handleListItemAction};
};