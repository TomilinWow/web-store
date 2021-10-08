import {FC, useEffect} from "react";
import ProductsList from "./ProductsList";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    fillProductsList, setFiltersAC,
} from "../../store/reducers/product/product-reducer";
import {RootState} from "../../store/store";
import {addItemToCart} from "../../store/reducers/cart/card-reducer";

type ProductListContainerType = {
    fillProductsList: (id: number, sort: string, categoryFilter?: any[]) => void,
    addItemToCart: (id: number) => void,
    setFiltersAC: (filter: any[]) => void
    productsList: any[],
    currentPage: number,
    isFetching: boolean,
    totalItems: number,
    perPages: number,
    sort: string,
    categories: any[],
    filters: any[]
}

const ProductListContainer: FC<ProductListContainerType> = ({
                                                                fillProductsList, productsList, addItemToCart,
                                                                currentPage, isFetching, perPages,
                                                                totalItems, sort, categories, setFiltersAC,
                                                                filters

                                                            }) => {

    useEffect(() => {
        fillProductsList(currentPage, sort)
    }, []);
    const pages = Math.ceil(totalItems / perPages)

    const changePage = (curPage: number, newsort= sort , newfilters = filters) => {
        fillProductsList(curPage, newsort, newfilters)
    }

    return <ProductsList productsList={productsList} addItemToCart={addItemToCart} currentPage={currentPage}
                         changePage={changePage} isFetching={isFetching} pages={pages}
                         sort={sort} filters={filters}
                         categories={categories} setFiltersAC={setFiltersAC}
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
        filters: state.product.filters
    }
}

export default compose(
    connect(mapStateToProps, {
        fillProductsList,
        addItemToCart,
        setFiltersAC,
    })
)(ProductListContainer)