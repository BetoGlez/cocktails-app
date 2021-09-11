import { Row, Col, Select } from "antd";

import "./CocktailsSearchComponent.scss";
import { useCocktailsSearchPage } from "./CocktailsSearchComponent";
import CocktailsListComponent from "../../components/CocktailsListComponent";
import { COCKTAIL_CATEGORY } from "../../models/cocktail.model";

const CocktailsSearchPage: React.FC = () => {
    const { handleCategorySelectChange } = useCocktailsSearchPage();

    return (
        <div className="cocktails-search-page main-container">
            <Row>
                <Col className="text-center" span={24}>
                    <h1>Cocktails search Page</h1>
                </Col>
            </Row>
            <Row className="margin-top margin-bottom">
                <Col className="text-center" span={24}>
                    <Select className="select-bar" size="large" placeholder="Select a cocktail category" onChange={handleCategorySelectChange}>
                        <Select.Option value={COCKTAIL_CATEGORY.ALCOHOLIC}>Alcoholic</Select.Option>
                        <Select.Option value={COCKTAIL_CATEGORY.NON_ALCOHOLIC}>Non Alcoholic</Select.Option>
                    </Select>
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

export default CocktailsSearchPage;