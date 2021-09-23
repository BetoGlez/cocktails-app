import { Avatar, Button, List, Modal, Tooltip } from "antd";
import { CheckOutlined, CloseOutlined, InfoOutlined } from "@ant-design/icons";

import "./MyCocktailsListsComponent.scss";
import { AVATAR_GROUP_STYLE, IMyCocktailsListsComponentProps, ListItemActionEnum, MAX_AVATAR_GROUPS, useMyCocktailsListsComponent } from "./MyCocktailsListsComponent";
import CocktailListDetailsModal from "../../modals/CocktailListDetailsModal";
import { ICocktailList } from "../../../models/cocktail-list.model";

const MyCocktailsListsComponent: React.FC<IMyCocktailsListsComponentProps> = (props) => {
    const {selectedList, getAvatarStyle, handleListItemAction, showListDetails, hideListDetails} = useMyCocktailsListsComponent(props);
    // Tip 5: Place state close to where is needed
    const cocktailsLists = new Array<ICocktailList>();

    return (
        <>
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
                        { props.listItemAction === ListItemActionEnum.DELETE &&
                            <Tooltip title="Show details">
                                <Button className="action-button" shape="circle" icon={<InfoOutlined />}
                                    onClick={() => showListDetails(cocktailList)} />
                            </Tooltip>
                        }
                    </List.Item>
                )}
            />
            <Modal title={`Showing details of "${selectedList?.title}" list`} visible={!!selectedList} footer={null}
                onCancel={hideListDetails}>
                <CocktailListDetailsModal cocktails={selectedList?.cocktails}/>
            </Modal>
        </>
    );
};

export default MyCocktailsListsComponent;