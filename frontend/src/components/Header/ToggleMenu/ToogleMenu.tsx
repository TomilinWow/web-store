import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import React, {FC} from 'react'
import {ToggleStyles} from "./ToggleStyle";
import {NavLink} from "react-router-dom";

type ToggleMenuType = {
    nameButton: any,
    categories: any[]
}

const ToggleMenu: FC<ToggleMenuType> = ({nameButton, categories}) => {
    const classes = ToggleStyles()
    const [open, setOpen] = React.useState<any>(false);
    const anchorRef = React.useRef<any>(null);


    const handleToggle = () => {
        setOpen((prevOpen:any) => !prevOpen);
    };
    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: any) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <Button className={classes.locale}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
            >
                {nameButton}
            </Button>

            <Popper style={{zIndex: 10}} open={open} anchorEl={anchorRef.current} role={undefined} transition>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {categories.map(c => (
                                        <NavLink to={`/${c.name}`} className={classes.navlink}>
                                            <MenuItem value={c.id} key={c.name} onClick={handleClose}>{c.name}</MenuItem>
                                        </NavLink>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>


    )
}

export default ToggleMenu