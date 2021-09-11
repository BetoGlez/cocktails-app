import { List, Button, Tooltip } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import "./CocktailsListComponent.scss";
import { MOCK_DATA } from "./CocktailsListComponent";

const CocktailsListComponent: React.FC = () => {
    return (
        <List
            className="cocktails-list-component"
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

export default CocktailsListComponent;