import { Button, Col, Row } from "antd";

import { IMyCocktailsComponentProps } from "./MyCocktailsComponent";
import CocktailsListComponent from "../CocktailsListComponent";

const MyCocktailsComponent: React.FC<IMyCocktailsComponentProps> = () => {
    return (
        <div className="main-container">
            <Row>
                <Col className="text-center" span={24}>
                    <h1>My cocktails lists page</h1>
                </Col>
            </Row>
            <Row className="margin-top" justify="center">
                <Col>
                    <Button>Create list</Button>
                </Col>
            </Row>
            <Row className="margin-top" justify="center">
                <Col span={20}>
                    <CocktailsListComponent />
                </Col>
            </Row>
        </div>
    );
};

export default MyCocktailsComponent;