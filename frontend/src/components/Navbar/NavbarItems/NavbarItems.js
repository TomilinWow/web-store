import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import AssistantPhotoRoundedIcon from '@material-ui/icons/AssistantPhotoRounded';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";

const CreateListItem = (IconComponent, primary) => {
    return (
        <ListItem button>
            <ListItemIcon>
                {IconComponent}
            </ListItemIcon>
            <ListItemText primary={primary}/>
        </ListItem>
    )
}

const NavbarItems = () => {
    return (
        <div>
            {CreateListItem(<AccountBoxRoundedIcon/>, "Account")}
            {CreateListItem(<ShoppingCartIcon/>, "Cart")}
            {CreateListItem(<CategoryRoundedIcon/>,"Category")}
            {CreateListItem(<AssistantPhotoRoundedIcon/>, "Orders")}
            <ListSubheader inset>Latest products</ListSubheader>
            {CreateListItem(<StarsRoundedIcon/>, "Iphone 30e")}
            {CreateListItem(<StarsRoundedIcon/>, "Samsung galaxy s22")}
            {CreateListItem(< StarsRoundedIcon/>,"Xiaomi 228" )}
        </div>
    );
}

export default NavbarItems;