import {makeStyles} from "@material-ui/core/styles";
const productListStyles = makeStyles((theme) => ({
    cartButton: {
        marginLeft: 'auto'
    },
    gridContent: {
        marginTop: 15
    },
    cardItem: {
        backgroundColor: 'white',
        color: 'black'
    },
    cart: {
        backgroundColor: 'linear-gradient(45deg, #61dafb 30%, #61dafb 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    textName: {
        fontWeight: "bold"
    },
    textCategory: {
        color: 'gray'
    }
}))

export default productListStyles