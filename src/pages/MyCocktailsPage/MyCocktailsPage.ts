import { useState } from "react";

import { INewCocktailListForm } from "../../models/forms/new-cocktail-list-form.model";

export const useMyCocktailsPage = () => {
    const [isCreateListModalVisible, setIsCreateListModalVisible] = useState(false);

    const showCreateListModal = (): void => {
        setIsCreateListModalVisible(true);
    };

    const hideCreateListModal = (): void => {
        setIsCreateListModalVisible(false);
    };

    const createCocktailList = (newList: INewCocktailListForm): void => {
        console.log("New cocktail list data: ", newList);
        hideCreateListModal();
    };

    return {isCreateListModalVisible, showCreateListModal, hideCreateListModal, createCocktailList};
};