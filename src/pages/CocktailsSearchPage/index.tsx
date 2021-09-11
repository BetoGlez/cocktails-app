import { Row, Col, Select, Spin } from "antd";

import "./CocktailsSearchComponent.scss";
import { useCocktailsSearchPage } from "./CocktailsSearchComponent";
import CocktailsListComponent from "../../components/CocktailsListComponent";
import { CocktailTypeEnum } from "../../models/cocktail.model";
import { useGetCocktails } from "../../hooks/api/cocktails-hooks";

const CocktailsSearchPage: React.FC = () => {
    const { selectedCocktailType, handleCategorySelectChange } = useCocktailsSearchPage();
    const {cocktails, isLoading} = useGetCocktails(selectedCocktailType);

    return (
        <div className="cocktails-search-page main-container">
            <Row>
                <Col className="text-center" span={24}>
                    <h1>Cocktails search Page</h1>
                </Col>
            </Row>
            <Row className="margin-top margin-bottom">
                <Col className="text-center" span={24}>
                    <Select className="select-bar" size="large" value={selectedCocktailType} onChange={handleCategorySelectChange}>
                        <Select.Option value={CocktailTypeEnum.ALCOHOLIC}>Alcoholic</Select.Option>
                        <Select.Option value={CocktailTypeEnum.NON_ALCOHOLIC}>Non Alcoholic</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row className="margin-top" justify="center">
                { !isLoading ?
                    <Col span={20}>
                        <CocktailsListComponent cocktails={cocktails}/>
                    </Col>
                    :
                    <Col>
                        <Spin className="margin-top" />
                    </Col>
                }
            </Row>
        </div>
    );
};

export default CocktailsSearchPage;