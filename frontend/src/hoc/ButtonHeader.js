import {IconButton} from "@material-ui/core";
import React from "react";

const ButtonHeader = ({component}) => {
    return (
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
        >
            {component}
        </IconButton>
    )
}

export default ButtonHeader;