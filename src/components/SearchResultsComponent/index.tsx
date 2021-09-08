import { List, Button, Tooltip } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import "./SearchResultsComponent.scss";
import { MOCK_DATA } from "./SearchResultsComponent";

const SearchResultsComponent: React.FC = () => {
    return (
        <List
            className="search-results-component"
            dataSource={MOCK_DATA}
            renderItem={cocktail => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<img className="list-item-img" src={cocktail.imgUrl} alt="Cocktail"/>}
                        title={cocktail.name}
                        description={cocktail.ingredients}
                    />
                    <Tooltip title="Add to a list">
                        <Button className="add-button" type="primary" shape="circle" icon={<PlusOutlined />} />
                    </Tooltip>
                </List.Item>
            )}
        />
    );
};

export default SearchResultsComponent;