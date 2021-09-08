import { Col, Row } from "antd";

import { IMyCocktailsComponentProps } from "./MyCocktailsComponent";

const MyCocktailsComponent: React.FC<IMyCocktailsComponentProps> = () => {
    return (
        <div className="main-container">
            <Row>
                <Col span={24}>
                    <h1>My cocktails tab</h1>
                </Col>
            </Row>
        </div>
    );
};

export default MyCocktailsComponent;