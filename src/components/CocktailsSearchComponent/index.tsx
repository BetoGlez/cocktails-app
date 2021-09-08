import { Row, Col, Select } from "antd";

import "./CocktailsSearchComponent.scss";
import { COCKTAIL_CATEGORY, ICocktailsSearchComponentProps, useCocktailsSearchComponent } from "./CocktailsSearchComponent";
import SearchResultsComponent from "../SearchResultsComponent";

const CocktailsSearchComponent: React.FC<ICocktailsSearchComponentProps> = () => {
    const { Option } = Select;
    const { handleCategorySelectChange } = useCocktailsSearchComponent();

    return (
        <div className="cocktails-search-component main-container">
            <Row>
                <Col className="text-center" span={24}>
                    <h1>Cocktails search Page</h1>
                </Col>
            </Row>
            <Row className="margin-top margin-bottom">
                <Col className="text-center" span={24}>
                    <Select className="select-bar" size="large" placeholder="Select a cocktail category" onChange={handleCategorySelectChange}>
                        <Option value={COCKTAIL_CATEGORY.ALCOHOLIC}>Alcoholic</Option>
                        <Option value={COCKTAIL_CATEGORY.NON_ALCOHOLIC}>Non Alcoholic</Option>
                    </Select>
                </Col>
            </Row>
            <Row className="margin-top" justify="center">
                <Col span={20}>
                    <SearchResultsComponent />
                </Col>
            </Row>
        </div>
    );
};

export default CocktailsSearchComponent;