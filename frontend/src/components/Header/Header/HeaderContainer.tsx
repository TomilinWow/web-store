import React, {FC, useEffect} from 'react';
import {fillCategory} from "../../../store/reducers/category/category-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";
import {RootState} from "../../../store/store";
import {setLengthCart} from "../../../store/reducers/cart/card-reducer";

type HeaderContainerType = {
    fillCategory: () => void,
    setLengthCart: () => void,
    categories: any[],
    cartLength: number
}
const HeaderContainer: FC<HeaderContainerType> = React.memo(({fillCategory,
                                                                 categories,
                                                                 cartLength,
                                                                 setLengthCart}) => {

    useEffect(() => {
        fillCategory()
        setLengthCart()
    }, [])
    return (
        <Header categories={categories} cartLength={cartLength}/>
    )
})

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.category.categories,
        cartLength: state.cart.cartLength
    }
}
export default compose(
    connect(mapStateToProps,
        {
            fillCategory,
            setLengthCart
        }),
)(HeaderContainer)