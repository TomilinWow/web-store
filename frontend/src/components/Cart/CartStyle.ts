import {Paper, styled} from "@mui/material";
import {alpha, makeStyles} from "@material-ui/core/styles";

export const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const CartStyle = makeStyles((theme) => ({
    itemStyle: {
        display: "flex",
        alignItems: "center"
    },
    gridItem: {
        wordWrap: 'break-word',
        fontSize: 18
    },
    gridItemStyle: {
        fontWeight: 800,
        color: "black"
    },
    index: {
        fontWeight: 800
    },
    items: {
        textAlign: 'left'
    }


}));
