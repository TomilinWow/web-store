import {makeStyles} from "@material-ui/core/styles";

const productListStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        '&:hover': {
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
        }
    },
// rgba(100, 100, 111, 0.2) rgba(97, 218, 251, 1)
    cartButtonBox: {
        display: "flex",
        justifyContent: 'center'
    },
    cartNameBox: {
        padding: '5px 10px',
        marginTop: 10,
        marginBottom: 16
    },
    cartName: {
        margin: 0,
    },
    cartPriceBox: {
        padding: '5px 10px',
        marginTop: "auto",
        marginBottom: 5

    },
    cartButton: {
        color: "red"
    },

    cardImage: {
        marginTop: 10,
        maxWidth: 180,
        maxHeight: 150,
        width: 'auto',
        height: "auto",
        marginLeft: "auto",
        marginRight: 'auto'

    },
    gridContent: {
        marginTop: 8
    },
    cardItem: {
        backgroundColor: 'white',
        color: 'black',
        paddingTop: 10

    },
    cart: {
        backgroundColor: 'linear-gradient(45deg, #61dafb 30%, #61dafb 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    textName: {
        fontWeight: "bold",
        color: 'black',
        textDecoration: 'none'

    },
    textCategory: {
        color: 'gray'
    },
    link: {
        textDecoration: "none",
        color: "black"
    }
}))

export default productListStyles