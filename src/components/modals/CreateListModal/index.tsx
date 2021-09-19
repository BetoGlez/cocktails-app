import { Col, Row, Input, Space, Button } from "antd";

import { ICreateListModalProps, useCreateListModal } from "./CreateListModal";
import { MAX_COCKTAIL_LIST_DESCRIPTION_CHARS } from "../../../app-constants";

const CreateListModal: React.FC<ICreateListModalProps> = (props) => {

    const { newCocktailListForm } = useCreateListModal(props);

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
                            <Button onClick={props.hideModal}>Cancel</Button>
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