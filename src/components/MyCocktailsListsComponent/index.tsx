import { Avatar, Button, List, Tooltip } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./MyCocktailsListsComponent.scss";
import { AVATAR_GROUP_STYLE, MAX_AVATAR_GROUPS, MOCK_COCKTAIL_LISTS, useMyCocktailsListsComponent } from "./MyCocktailsListsComponent";

const MyCocktailsListsComponent: React.FC = () => {
    const {getAvatarStyle} = useMyCocktailsListsComponent();
    return (
        <List
            className="my-cocktails-lists-component"
            dataSource={MOCK_COCKTAIL_LISTS}
            renderItem={cocktailList => (
                <List.Item>
                    <Avatar.Group className="avatar-group" size="large" maxCount={MAX_AVATAR_GROUPS} maxStyle={AVATAR_GROUP_STYLE}>
                        { cocktailList.cocktails.map(cocktail => (
                            <Tooltip key={cocktail.id} title={cocktail.name}>
                                <Avatar size="large" style={getAvatarStyle()}>{cocktail.name.charAt(0)}</Avatar>
                            </Tooltip>
                        ))}
                    </Avatar.Group>
                    <List.Item.Meta
                        title={cocktailList.name}
                        description={cocktailList.description}
                    />
                    <Tooltip title="Delete list">
                        <Button className="delete-button" danger shape="circle" icon={<CloseOutlined />} />
                    </Tooltip>
                </List.Item>
            )}
        />
    );
};

export default MyCocktailsListsComponent;