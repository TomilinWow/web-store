import Grid from "@material-ui/core/Grid";
import productListStyles from "./ProductsListStyle";
import CardProduct from "./CardProduct";
import React, {FC} from 'react';
import {productType} from "../../types/product";
import MySelect from "../Select/MySelectController";
import MyPagination from "../Paginator/Paginator";
import Loader from "../Loader/Loader";
import CheckSelect from "./CheckmarksSelect/CheckSelect";
import MySelectController from "../Select/MySelectController";

type ProductsListType = {
    productsList: productType[],
    addItemToCart: (id: number) => void,
    currentPage: number,
    changePage: (id: number, sort: string) => void,
    isFetching: boolean,
    pages: number,
    fillProductsList: (id: number, sort: string, categoryFilter?: any[]) => void,
    sort: string,
    categories: any[],
    setCategoryFilterAC: (category: any[]) => void,
    categoryFilter: any[]
}

const ProductsList: FC<ProductsListType> = ({
                                                productsList,
                                                addItemToCart,
                                                pages,
                                                changePage,
                                                isFetching,
                                                fillProductsList,
                                                sort,
                                                categories,
                                                setCategoryFilterAC,
                                                categoryFilter
                                            }) => {

    const classes = productListStyles();
    return (<div>
            <div className={classes.filterSortBox}>
                <CheckSelect setCategoryFilterAC={setCategoryFilterAC} categories={categories}/>
                <MySelectController categoryFilter={categoryFilter} sort={sort} fillProductsList={fillProductsList}/>
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
        </div>
    )
}
export default ProductsList;