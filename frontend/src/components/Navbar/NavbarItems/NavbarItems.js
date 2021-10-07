import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssistantPhotoRoundedIcon from '@material-ui/icons/AssistantPhotoRounded';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from "react-router-dom";
import {RouteNames} from "../../../router";
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
            <NavLink to={RouteNames.CART} style={{textDecoration: "none", color: "black"}}>
                {CreateListItem(<ShoppingCartIcon/>, "Cart")}
            </NavLink>
            <NavLink to={RouteNames.ORDER} style={{textDecoration: "none", color: "black"}}>
                {CreateListItem(<AssistantPhotoRoundedIcon/>, "Orders")}
            </NavLink>
            <ListSubheader inset>Latest products</ListSubheader>
            {CreateListItem(<StarsRoundedIcon/>, "Iphone 30e")}
            {CreateListItem(<StarsRoundedIcon/>, "Samsung galaxy s22")}
            {CreateListItem(< StarsRoundedIcon/>,"Xiaomi 228" )}
        </div>
    );
}

export default NavbarItems;