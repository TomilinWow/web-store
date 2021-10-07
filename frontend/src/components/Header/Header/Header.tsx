import React, {FC} from 'react';
import {
    AppBar,
    Typography,
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
import ButtonHeader from "../../../hoc/ButtonHeader";
import {NavLink} from "react-router-dom";
import BasicModal from "../Modal/Modal";
import {StyledBadge} from "./HeaderStyle";
import {RouteNames} from "../../../router";

type HeaderType = {
    categories: any[],
    cartLength: number,
    searchProduct: (q: string) => void,
    isModal: boolean,
    cities: any[],
    setCityAC: (city: string, id: number) => void,
    city: string,
    setCookie: (id: number) => void

}

const Header: FC<HeaderType> = ({
                                    categories, cartLength, searchProduct,
                                    isModal, cities, setCityAC,
                                    city, setCookie
                                }) => {

    const classes = HeaderStyle()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div>
            <AppBar position="static" className={classes.grow}>
                <Toolbar>
                    {isMatch ? (<>
                                <Navbar/>
                                <NavLink className={classes.navlink} to='/home'>
                                    <img className={classes.photoStyle} src={photo}/>
                                </NavLink>
                                <Box className={classes.flex}/>

                            </>
                        )
                        :
                        (
                            <>  <NavLink to='/home' className={classes.navlink}>
                                <Box className={classes.photoStyle}>
                                    <img className={classes.photoStyle} src={photo}/>
                                </Box>
                                <Typography className={classes.title} variant="h6" noWrap>
                                    ReactStore
                                </Typography>
                            </NavLink>

                                <ToggleMenu categories={categories} nameButton='Categories'/>
                                <NavLink to={RouteNames.ORDER} className={classes.navlink}>
                                    <Button variant="outlined" className={classes.locale}>
                                        Orders
                                    </Button>
                                </NavLink>

                                <Box className={classes.flex}/>
                            </>)
                    }

                    <Search searchProduct={searchProduct}/>
                    <BasicModal setCookie={setCookie} city={city} setCityAC={setCityAC} cities={cities}
                                isModal={isModal} styles={classes}/>
                    <ButtonHeader component={<NotificationsRoundedIcon/>}/>
                    <NavLink to='/cart' className={classes.navlink}>
                        <StyledBadge badgeContent={cartLength} color="primary">
                            <ButtonHeader component={<ShoppingCartRoundedIcon/>}/>
                        </StyledBadge>
                    </NavLink>
                    <ButtonHeader component={<AccountCircleRoundedIcon/>}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
