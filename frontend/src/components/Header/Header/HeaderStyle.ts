import {alpha, makeStyles} from "@material-ui/core/styles";
import {Badge, styled} from "@mui/material";
import {white} from "material-ui/styles/colors";

export const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: 12,
        top: 15,
        border: `2px solid #47b6d5`,
        padding: '0 4px',
        backgroundColor: '#20232a'
    },
}));

export const HeaderStyle = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        backgroundColor: '#20232a',
        marginBottom: 20

    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: '#47b6d5',
        fontWeight: "bold",
        fontSize: '18px',
        marginRight: 20,
        marginTop: "auto",
        marginBottom: "auto"


    },
    photoStyle: {
        width: '50px',
        height: '50px',
        backgroundColor: '#20232a',

    },
    locale: {
        border: 0,
        fontSize: 14,
        borderRadius: 3,
        height: 34,
        padding: '0 15px',
        marginRight: 10,
        marginLeft: 2,
        background: 'linear-gradient(45deg, #61dafb 30%, #61dafb 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 80,
        maxWidth: 100
    },

    flex: {
        flexGrow: 1,
    },
    navlink: {
        display: "flex",
        textDecoration: "none",
        color: "white"
    },
    iconButton: {
        marginRight: 7,
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
    }

}));
