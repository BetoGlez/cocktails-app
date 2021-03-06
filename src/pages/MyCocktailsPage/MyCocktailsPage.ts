import { useState } from "react";

import { useCocktailsListsStore } from "../../hooks/store/cocktails-lists-hooks";
import { INewCocktailListForm } from "../../models/forms/new-cocktail-list-form.model";

export const useMyCocktailsPage = () => {
    // Tip 4: Separate the model and presentation layer
    const [isCreateListModalVisible, setIsCreateListModalVisible] = useState(false);

    const showCreateListModal = (): void => {
        setIsCreateListModalVisible(true);
    };

    const hideCreateListModal = (): void => {
        setIsCreateListModalVisible(false);
    };

    const handleListCreation = (newList: INewCocktailListForm): void => {
        // Tip 4: Separate the model and presentation layer
        hideCreateListModal();
    };

    return {isCreateListModalVisible, showCreateListModal, hideCreateListModal, handleListCreation};
};