import React, {FC, useEffect} from 'react';
import {fillCategory} from "../../../store/reducers/category/category-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";
import {RootState} from "../../../store/store";
import {setLengthCart} from "../../../store/reducers/cart/card-reducer";
import {searchProduct} from "../../../store/reducers/product/product-reducer";
import {getCookie, setCities, setCityAC, setCookie} from "../../../store/reducers/auth/auth-reducer";

type HeaderContainerType = {
    fillCategory: () => void,
    setLengthCart: () => void,
    categories: any[],
    cartLength: number,
    searchProduct: (q: string) => void,
    isModal: boolean,
    getCookie: () => void,
    cities: any[],
    setCityAC: (city: string, id: number) => void,
    city: string,
    setCities: () => void,
    setCookie: (id: number) => void
}
const HeaderContainer: FC<HeaderContainerType> = React.memo(({
                                                                 fillCategory, categories, cartLength,
                                                                 setLengthCart, searchProduct, isModal,
                                                                 getCookie, cities, setCityAC, city,
                                                                 setCities, setCookie
                                                             }) => {

    useEffect(() => {
        fillCategory()
        setLengthCart()
        getCookie()
        setCities()
    }, [])

    return (
        <Header searchProduct={searchProduct} categories={categories}
                cartLength={cartLength} isModal={isModal}
                cities={cities} setCityAC={setCityAC}
                city={city} setCookie={setCookie}/>
    )
})

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.category.categories,
        cartLength: state.cart.cartLength,
        isModal: state.auth.isModal,
        cities: state.auth.cities,
        city: state.auth.city
    }
}
export default compose(
    connect(mapStateToProps,
        {
            fillCategory, setLengthCart, searchProduct, getCookie,
            setCities, setCityAC, setCookie
        }),
)(HeaderContainer)