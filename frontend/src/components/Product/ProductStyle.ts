import {makeStyles} from "@material-ui/core/styles";


export const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    paperSecond: {
        color: theme.palette.text.secondary,
        marginTop: 20,
        padding: 10
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: 10
    },
    imageProduct: {
        width: 300,

    },
}))