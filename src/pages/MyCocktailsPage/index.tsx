import { Button, Col, Modal, Row } from "antd";

import { useMyCocktailsPage } from "./MyCocktailsPage";
import MyCocktailsListsComponent from "../../components/MyCocktailsListsComponent";
import CreateListModal from "../../components/modals/CreateListModal";
import { ListItemActionEnum } from "../../components/MyCocktailsListsComponent/MyCocktailsListsComponent";

const MyCocktailsPage: React.FC = () => {
    const {isCreateListModalVisible, showCreateListModal, hideCreateListModal, handleListCreation} = useMyCocktailsPage();

    return (
        <>
            <div className="main-container">
                <Row>
                    <Col className="text-center" span={24}>
                        <h1>My cocktails lists page</h1>
                    </Col>
                </Row>
                <Row className="margin-top" justify="center">
                    <Col>
                        <Button onClick={showCreateListModal}>Create list</Button>
                    </Col>
                </Row>
                <Row className="margin-top" justify="center">
                    <Col span={20}>
                        <MyCocktailsListsComponent listItemAction={ListItemActionEnum.DELETE} />
                    </Col>
                </Row>
            </div>
            <Modal title="Create a new cocktail list" visible={isCreateListModalVisible} footer={null}
                onCancel={hideCreateListModal}>
                <CreateListModal onCreateList={handleListCreation} hideModal={hideCreateListModal} />
            </Modal>
        </>
    );
};

export default MyCocktailsPage;