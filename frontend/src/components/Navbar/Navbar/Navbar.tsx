import NavbarItems from "../NavbarItems/NavbarItems";
import IconButton from "@material-ui/core/IconButton";
import React, {FC} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {SwipeableDrawer} from "@material-ui/core";
import Box from "@material-ui/core/Box";

import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';

const Navbar: FC = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open-drawer"
                onClick={() => {
                    setOpen(true)
                }}>
                <MenuIcon/>
            </IconButton>
            <SwipeableDrawer onClose={() => {
                setOpen(false)
            }}
                             anchor="left"
                             onOpen={() => {
                             }}
                             open={open}>
                <Box textAlign="right">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open-drawer"
                        onClick={() => {
                            setOpen(false)
                        }}>
                        <ArrowLeftRoundedIcon/>
                    </IconButton>
                </Box>
                <NavbarItems/>
            </SwipeableDrawer>
        </div>
    )

}

export default Navbar;