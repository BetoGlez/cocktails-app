import { Col, Row, Input, Space, Button } from "antd";
import { FormikHelpers, useFormik } from "formik";

import { MAX_COCKTAIL_LIST_DESCRIPTION_CHARS } from "../../../app-constants";
import { INewCocktailListForm } from "../../../models/forms/new-cocktail-list-form.model";
import { NEW_COCKTAIL_LIST_INITIAL_VALUES } from "./CreateListModal";

// Tip 2: Name a custom interface to define the props of a component
const CreateListModal: React.FC<{
    onCreateList: (listData: INewCocktailListForm) => void;
    hideModal: () => void;
}> = ({onCreateList, hideModal}) => {

    // Tip 1: Keep components under 100 lines
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

    return (
        <form onSubmit={newCocktailListForm.handleSubmit}>
            <Space className="main-container" size={16} direction="vertical">
                <Row>
                    <Col span={24}>
                        <Input name="listTitle" value={newCocktailListForm.values.listTitle}
                            onChange={newCocktailListForm.handleChange}
                            placeholder="Introduce the name of your cocktail list" />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Input.TextArea name="listDescription" value={newCocktailListForm.values.listDescription}
                            onChange={newCocktailListForm.handleChange}
                            placeholder="Introduce a description for the cocktail list"
                            showCount maxLength={MAX_COCKTAIL_LIST_DESCRIPTION_CHARS} rows={3} />
                    </Col>
                </Row>
                <Row justify="end">
                    <Space>
                        <Col>
                            <Button onClick={hideModal}>Cancel</Button>
                        </Col>
                        <Col>
                            <Button type="primary" htmlType="submit"
                                disabled={!newCocktailListForm.values.listTitle || !newCocktailListForm.values.listDescription}>
                                Create cocktail list</Button>
                        </Col>
                    </Space>
                </Row>
            </Space>
        </form>
    );
};

export default CreateListModal;