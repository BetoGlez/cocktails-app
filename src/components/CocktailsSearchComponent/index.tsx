import { Row, Col } from "antd";

import { ICocktailsSearchComponentProps } from "./CocktailsSearchComponent";

const CocktailsSearchComponent: React.FC<ICocktailsSearchComponentProps> = () => {
    return (
        <div className="main-container">
            <Row>
                <Col span={24}>
                    <h1>Cocktails search Page</h1>
                </Col>
            </Row>
        </div>
    );
};

export default CocktailsSearchComponent;