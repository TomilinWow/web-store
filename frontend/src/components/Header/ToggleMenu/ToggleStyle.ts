import {alpha, makeStyles} from "@material-ui/core/styles";

export const ToggleStyles = makeStyles((theme) => ({
    locale: {
        border: 0,
        fontSize: 14,
        borderRadius: 3,
        height: 34,
        padding: '0 15px',
        marginRight: 10,
        background: 'linear-gradient(45deg, #61dafb 30%, #61dafb 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 80,
        maxWidth: 100
    },
    navlink: {
        textDecoration: "none",
        color: "black"
    }
}))

