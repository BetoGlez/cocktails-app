import { List, Button, Tooltip, Empty } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import "./CocktailsListComponent.scss";
import { ICocktailsListComponentProps, useCocktailsListComponent } from "./CocktailsListComponent";

const CocktailsListComponent: React.FC<ICocktailsListComponentProps> = ({cocktails}) => {
    const {composeCocktailIngredients, addCocktailToList} = useCocktailsListComponent();
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
                                description={composeCocktailIngredients(cocktail)}
                            />
                            <Tooltip title="Add to a list">
                                <Button className="add-button" type="primary" shape="circle" icon={<PlusOutlined />}
                                    onClick={() => addCocktailToList(cocktail.idDrink)} />
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