import Grid from "@material-ui/core/Grid";
import productListStyles from "./ProductsListStyle";
import CardProduct from "./CardProduct";
import React, {FC} from 'react';
import {productType} from "../../types/product";

type ProductsListType = {
    productsList: productType[],
    addItemToCart: (id: number) => void
}

const ProductsList: FC<ProductsListType> = ({productsList, addItemToCart}) => {

    const classes = productListStyles();
    return (
        <Grid container spacing={4} className={classes.gridContent}>
            {productsList.map( product => {
                return <CardProduct key={product.id} product={product} addItemToCart={addItemToCart}/>
            })}
        </Grid>
    )
}
export default ProductsList;