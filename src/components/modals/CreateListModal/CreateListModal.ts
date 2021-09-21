import { FormikHelpers, useFormik } from "formik";

import { INewCocktailListForm } from "../../../models/forms/new-cocktail-list-form.model";

// Tip 2: Name a custom interface to define the props of a component
export interface ICreateListModalProps {
    onCreateList: (listData: INewCocktailListForm) => void;
    hideModal: () => void;
}

const NEW_COCKTAIL_LIST_INITIAL_VALUES: INewCocktailListForm = {
    listTitle: "",
    listDescription: ""
};

// Tip 1: Keep components under 100 lines
export const useCreateListModal = ({onCreateList}: ICreateListModalProps) => {

    const createCocktailList = (values: INewCocktailListForm, helpers: FormikHelpers<INewCocktailListForm>): void => {
        if (newCocktailListForm.isValid) {
            const {listTitle, listDescription} = values;
            onCreateList({listTitle, listDescription});
            helpers.resetForm();
        }
    };

    const newCocktailListForm = useFormik({
        initialValues: NEW_COCKTAIL_LIST_INITIAL_VALUES,
        onSubmit: createCocktailList
    });

    return { newCocktailListForm };
};