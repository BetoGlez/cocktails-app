import { List } from "antd";

import "./CocktailListDetailsModal.scss";
import { ICocktailListDetailsModalProps } from "./CocktailListDetailsModal";
import { useCocktail } from "../../../hooks/cocktails/cocktail-hooks";

const CocktailListDetailsModal: React.FC<ICocktailListDetailsModalProps> = ({cocktails}) => {
    const {composeCocktailIngredients} = useCocktail();

    return (
        <List
            className="cocktail-list-details-modal"
            dataSource={cocktails}
            renderItem={cocktail => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<img className="list-item-img" src={cocktail.strDrinkThumb} alt="Cocktail"/>}
                        title={cocktail.strDrink}
                        description={composeCocktailIngredients(cocktail)}
                    />
                    <p className="instructions">{cocktail.strInstructions}</p>
                </List.Item>
            )}
        />
    );
};

export default CocktailListDetailsModal;