import { Avatar, Button, List, Tooltip } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import "./MyCocktailsListsComponent.scss";
import { AVATAR_GROUP_STYLE, IMyCocktailsListsComponentProps, ListItemActionEnum, MAX_AVATAR_GROUPS, useMyCocktailsListsComponent } from "./MyCocktailsListsComponent";
import { useCocktailsListsStore } from "../../hooks/store/cocktails-lists-hooks";

const MyCocktailsListsComponent: React.FC<IMyCocktailsListsComponentProps> = (props) => {
    const {getAvatarStyle, handleListItemAction} = useMyCocktailsListsComponent(props);
    const {cocktailsLists} = useCocktailsListsStore();

    return (
        <List
            className="my-cocktails-lists-component"
            dataSource={cocktailsLists}
            renderItem={cocktailList => (
                <List.Item>
                    <Avatar.Group className="avatar-group" size="large" maxCount={MAX_AVATAR_GROUPS} maxStyle={AVATAR_GROUP_STYLE}>
                        { cocktailList.cocktails.map(cocktail => (
                            <Tooltip key={cocktail.idDrink} title={cocktail.strDrink}>
                                <Avatar size="large" style={getAvatarStyle()}>{cocktail.strDrink.charAt(0)}</Avatar>
                            </Tooltip>
                        ))}
                    </Avatar.Group>
                    <List.Item.Meta
                        title={cocktailList.title}
                        description={cocktailList.description}
                    />
                    <Tooltip title={props.listItemAction === ListItemActionEnum.DELETE ? "Delete list" : "Select list"}>
                        <Button className="action-button" danger={props.listItemAction === ListItemActionEnum.DELETE} shape="circle"
                            icon={props.listItemAction === ListItemActionEnum.DELETE ? <CloseOutlined /> : <CheckOutlined />}
                            onClick={() => handleListItemAction(cocktailList.id, props.listItemAction)} />
                    </Tooltip>
                </List.Item>
            )}
        />
    );
};

export default MyCocktailsListsComponent;