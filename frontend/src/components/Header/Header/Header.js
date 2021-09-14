import React from 'react';
import {
    AppBar,
    Paper,
    Typography,
    IconButton,
    Toolbar,
    Button, useTheme
} from '@material-ui/core';
import Search from "../Search/Search";
import photo from '../../../images/react.png'

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Navbar from "../../Navbar/Navbar/Navbar";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import ToggleMenu from "../ToggleMenu/ToogleMenu";
import {HeaderStyle} from "./HeaderStyle";

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


function Header() {
    const classes = HeaderStyle()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            <AppBar position="static" className={classes.grow}>
                <Toolbar>
                    {isMatch ? (<>
                                <Navbar/>
                                <Box className={classes.photoStyle}>
                                    <img className={classes.photoStyle} src={photo}/>
                                </Box>
                                <Box className={classes.flex}/>

                            </>
                        )
                        :
                        (
                            <>
                                <Box className={classes.photoStyle}>
                                    <img className={classes.photoStyle} src={photo}/>
                                </Box>
                                <Typography className={classes.title} variant="h6" noWrap>
                                    ReactStore
                                </Typography>
                                <ToggleMenu nameButton='Categories'  styles={classes.locale}/>
                                <Button variant="outlined" className={classes.locale}>
                                    Orders
                                </Button>

                                <Box className={classes.flex}/>
                            </>)
                    }

                    <Search/>
                    <Button variant="outlined" className={classes.locale}>
                        Location
                    </Button>
                    <ButtonHeader component={<NotificationsRoundedIcon/>}/>
                    <ButtonHeader component={<ShoppingCartRoundedIcon/>}/>
                    <ButtonHeader component={<AccountCircleRoundedIcon/>}/>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;