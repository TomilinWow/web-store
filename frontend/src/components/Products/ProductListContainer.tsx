import {FC, useEffect} from "react";
import ProductsList from "./ProductsList";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    fillProductsList,
} from "../../store/reducers/product/product-reducer";
import {RootState} from "../../store/store";
import {addItemToCart} from "../../store/reducers/cart/card-reducer";

type ProductListContainerType = {
    fillProductsList: (id: number, sort: string, categoryFilter?: any[]) => void,
    addItemToCart: (id: number) => void,
    productsList: any[],
    currentPage: number,
    isFetching: boolean,
    totalItems: number,
    perPages: number,
    sort: string,
    categories: any[],
}

const ProductListContainer: FC<ProductListContainerType> = ({
                                                                fillProductsList, productsList, addItemToCart,
                                                                currentPage, isFetching, perPages,
                                                                totalItems, sort, categories,
                                                            }) => {

    useEffect(() => {
        fillProductsList(currentPage, sort)
    }, []);
    const pages = Math.ceil(totalItems / perPages)

    const changePage = (curPage: number, sort: string) => {
        fillProductsList(curPage, sort)
    }

    return <ProductsList productsList={productsList} addItemToCart={addItemToCart} currentPage={currentPage}
                         changePage={changePage} isFetching={isFetching} pages={pages}
                         fillProductsList={fillProductsList} sort={sort}
                         categories={categories}
    />
}

const mapStateToProps = (state: RootState) => {
    return {
        productsList: state.product.products,
        currentPage: state.product.currentPage,
        isFetching: state.product.isFetching,
        totalItems: state.product.totalItems,
        perPages: state.product.perPages,
        sort: state.product.sort,
        categories: state.category.categories,
    }
}

export default compose(
    connect(mapStateToProps, {
        fillProductsList,
        addItemToCart,
    })
)(ProductListContainer)