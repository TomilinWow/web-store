import {FC, useEffect} from "react";
import ProductsList from "./ProductsList";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    fillProductsList, setFiltersAC, setSortAC,
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
    filters: any[],
    setSortAC: (sort: string) => void
}

const ProductListContainer: FC<ProductListContainerType> = ({
                                                                fillProductsList, productsList, addItemToCart,
                                                                currentPage, isFetching, perPages,
                                                                totalItems, sort, categories, setFiltersAC,
                                                                filters, setSortAC

                                                            }) => {

    useEffect(() => {
        fillProductsList(currentPage, sort, filters)
    }, []);

    const pages = Math.ceil(totalItems / perPages)

    const setCurrentFilters = (filters: any[]) => {
        fillProductsList(currentPage, sort, filters)
        setFiltersAC(filters)
    }

    const setCurrentSort = (sort: string) => {
        fillProductsList(currentPage, sort, filters)
        setSortAC(sort)
    }

    const changePage = (curPage: number) => {
        fillProductsList(curPage, sort, filters)
    }

    return <ProductsList productsList={productsList} addItemToCart={addItemToCart} currentPage={currentPage}
                         changePage={changePage} isFetching={isFetching} pages={pages}
                         sort={sort} filters={filters} setCurrentSort={setCurrentSort}
                         categories={categories} setCurrentFilters={setCurrentFilters}
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
        setSortAC
    })
)(ProductListContainer)