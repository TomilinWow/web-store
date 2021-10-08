import Grid from "@material-ui/core/Grid";
import productListStyles from "./ProductsListStyle";
import CardProduct from "./CardProduct";
import React, {FC, useState} from 'react';
import {productType} from "../../types/product";
import MySelect from "../Select/MySelectController";
import MyPagination from "../Paginator/Paginator";
import Loader from "../Loader/Loader";
import CheckSelect from "./CheckmarksSelect/CheckSelect";
import MySelectController from "../Select/MySelectController";
import FlashMessage from "../FlashMessage/FlashMessage";

type ProductsListType = {
    productsList: productType[],
    addItemToCart: (id: number) => void,
    currentPage: number,
    changePage: (id: number, sort: string,  categoryFilter?: any[]) => void,
    isFetching: boolean,
    pages: number,
    setFiltersAC: (filter: any[]) => void
    sort: string,
    categories: any[],
    filters: any[]
}

const ProductsList: FC<ProductsListType> = ({
                                                productsList, addItemToCart, pages,
                                                changePage, isFetching,
                                                sort, categories, setFiltersAC, filters
                                            }) => {

    const [state, setState] = useState(false)
    const classes = productListStyles();
    return (<div>
            <div className={classes.filterSortBox}>
                <CheckSelect sort={sort} changePage={changePage} setFilters={setFiltersAC} categories={categories}/>
                <MySelectController changePage={changePage} filters={filters} sort={sort}/>
            </div>

            {isFetching
                ? <Loader/>
                : <React.Fragment>
                    <Grid container spacing={4} className={classes.gridContent}>
                        {productsList.map(product => {
                            return <CardProduct key={product.id} product={product} addItemToCart={addItemToCart}/>
                        })}
                    </Grid>
                </React.Fragment>
            }
            <div className={classes.paginator}>
                <MyPagination sort={sort} pages={pages} changePage={changePage}/>
            </div>
            {state ? <FlashMessage message={"Product added!"} type={"success"}/>: <div></div>}
        </div>
    )
}
export default ProductsList;