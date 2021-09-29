import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import productListStyles from "./ProductsListStyle";
import {NavLink} from "react-router-dom";
import {FC} from "react";
import {Box} from "@mui/material";
import {PRODUCT_ROUTE} from "../../utils/consts";
import {productType} from "../../types/product";

type CardProductType = {
    product: productType
}

const CardProduct: FC<CardProductType> = ({product}) => {
    const classes = productListStyles()
    return (
        <Grid item={true} xs={6} sm={3}>
            <Card className={classes.cardItem}>
                <CardMedia component={'img'} image={product.image} title={product.name}/>
                <CardContent>
                    <NavLink to={`${PRODUCT_ROUTE}/${product.id}`}>
                        <Typography className={classes.textName} component='h2' variant='h6'>
                            {product.name}
                        </Typography>
                    </NavLink>
                    <Box display={'flex'}>
                        <Box>
                            <Typography className={classes.textCategory}>
                                {product.category}
                            </Typography>
                            <Typography component='h3' variant='body1'>
                                Price: {product.price} $
                            </Typography>
                        </Box>
                        <IconButton className={classes.cartButton} aria-label="add to shopping cart" color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </Box>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardProduct