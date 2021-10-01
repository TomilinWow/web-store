import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import productListStyles from "./ProductsListStyle";
import {NavLink, Link} from "react-router-dom";
import {FC} from "react";
import {Box, Button} from "@mui/material";
import {PRODUCT_ROUTE} from "../../utils/consts";
import {productType} from "../../types/product";


type CardProductType = {
    product: productType
}

const CardProduct: FC<CardProductType> = ({product}) => {
    const classes = productListStyles()
    return (
        <Grid item={true} xs={6} sm={3}>

                <Card className={classes.wrapper}>
                    <CardMedia className={classes.cardImage} component={'img'} image={product.image}/>
                    <div className={classes.cartNameBox}>
                        <Link className={classes.link} to={PRODUCT_ROUTE + '/' + product.id}>
                            <h3 className={classes.cartName}>{product.name}</h3>
                        </Link>

                        <p className={classes.cartName}>{product.category}</p>
                    </div>
                    <div className={classes.cartPriceBox}>
                        <h3 className={classes.cartName}>${product.price}</h3>
                    </div>
                    <Button>
                        <AddShoppingCartIcon/>
                    </Button>
                </Card>
        </Grid>
    )
}

export default CardProduct