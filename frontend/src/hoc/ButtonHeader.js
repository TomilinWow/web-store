import {IconButton} from "@material-ui/core";
import React from "react";
import {HeaderStyle} from "../components/Header/Header/HeaderStyle";


const ButtonHeader = ({component}) => {
    const classes = HeaderStyle()
    return (
        <IconButton className={classes.iconButton}
            edge="start"
            color="inherit"
            aria-label="open drawer"
        >
            {component}
        </IconButton>
    )
}

export default ButtonHeader;