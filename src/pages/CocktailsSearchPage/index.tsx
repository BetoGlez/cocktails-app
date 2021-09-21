import { Row, Col, Select, Spin, Affix, BackTop } from "antd";

import "./CocktailsSearchComponent.scss";
import { useCocktailsSearchPage } from "./CocktailsSearchComponent";
import CocktailsListComponent from "../../components/lists/CocktailsListComponent";
import { CocktailTypeEnum } from "../../models/cocktail.model";
import { useGetCocktails } from "../../hooks/api/cocktails-hooks";

const CocktailsSearchPage: React.FC = () => {
    const { selectedCocktailType, handleCategorySelectChange } = useCocktailsSearchPage();
    // Tip 4: Separate the model and presentation layer
    const {cocktails, isLoading} = useGetCocktails(selectedCocktailType);

    // TIP 8: Include useEffect dependencies or useRef

    return (
        <div className="cocktails-search-page main-container">
            <BackTop />
            <Affix>
                <div className="fixed-menu-container">
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
                </div>
            </Affix>
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