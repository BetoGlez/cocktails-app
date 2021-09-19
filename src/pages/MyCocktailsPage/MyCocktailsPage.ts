import { useState } from "react";

import { useCocktailsListsStore } from "../../hooks/store/cocktails-lists-hooks";
import { INewCocktailListForm } from "../../models/forms/new-cocktail-list-form.model";

export const useMyCocktailsPage = () => {
    const {createCocktailList} = useCocktailsListsStore();
    const [isCreateListModalVisible, setIsCreateListModalVisible] = useState(false);

    const showCreateListModal = (): void => {
        setIsCreateListModalVisible(true);
    };

    const hideCreateListModal = (): void => {
        setIsCreateListModalVisible(false);
    };

    const handleListCreation = (newList: INewCocktailListForm): void => {
        const {listTitle, listDescription} = newList;
        createCocktailList(listTitle, listDescription);
        hideCreateListModal();
    };

    return {isCreateListModalVisible, showCreateListModal, hideCreateListModal, handleListCreation};
};