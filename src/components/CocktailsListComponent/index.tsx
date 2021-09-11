import { List, Button, Tooltip, Empty } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import "./CocktailsListComponent.scss";
import { ICocktailsListComponentProps } from "./CocktailsListComponent";

const CocktailsListComponent: React.FC<ICocktailsListComponentProps> = ({cocktails}) => {
    return (
        <>
            { cocktails.length > 0 ?
                <List
                    className="cocktails-list-component"
                    dataSource={cocktails}
                    renderItem={cocktail => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<img className="list-item-img" src={cocktail.strDrinkThumb} alt="Cocktail"/>}
                                title={cocktail.strDrink}
                                description={cocktail.strIngredient1}
                            />
                            <Tooltip title="Add to a list">
                                <Button className="add-button" type="primary" shape="circle" icon={<PlusOutlined />} />
                            </Tooltip>
                        </List.Item>
                    )}
                />
                :
                <Empty />
            }
        </>
    );
};

export default CocktailsListComponent;