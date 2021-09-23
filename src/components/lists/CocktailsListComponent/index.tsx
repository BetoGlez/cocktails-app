// Tip 12: Import order
import { List, Button, Tooltip, Modal } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import "./CocktailsListComponent.scss";
import { ICocktailsListComponentProps, useCocktailsListComponent } from "./CocktailsListComponent";
import SelectCocktailListModal from "../../modals/SelectCocktailListModal";
import { ICocktail } from "../../../models/cocktail.model";

const CocktailsListComponent: React.FC<ICocktailsListComponentProps> = ({cocktails}) => {
    const {preselectedCocktail, preselectCocktailForList, handleAddCocktailToList, cancelCocktailPreselection} = useCocktailsListComponent();

    // Tip 3: Keep components dummy
    const composeCocktailIngredients = (cocktail: ICocktail): string => {
        let cocktailIngredients = "";
        for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}` as keyof ICocktail];
            if (ingredient !== null) {
                cocktailIngredients = cocktailIngredients ? `${cocktailIngredients}, ${ingredient}` : ingredient;
            } else {
                break;
            }
        }
        return cocktailIngredients;
    };

    return (
        <>
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
                                onClick={() => preselectCocktailForList(cocktail)} />
                        </Tooltip>
                    </List.Item>
                )}
            />
            <Modal title={`Select a list to add "${preselectedCocktail?.strDrink}" cocktail`} visible={!!preselectedCocktail}
                footer={null} onCancel={cancelCocktailPreselection}>
                <SelectCocktailListModal preselectedCocktail={preselectedCocktail!} onListCocktailSelect={handleAddCocktailToList} />
            </Modal>
        </>
    );
};

export default CocktailsListComponent;