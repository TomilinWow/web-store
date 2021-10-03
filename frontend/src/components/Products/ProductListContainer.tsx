import {FC, useEffect} from "react";
import ProductsList from "./ProductsList";
import {compose} from "redux";
import {connect} from "react-redux";
import {fillProductsList} from "../../store/reducers/product/product-reducer";
import {RootState} from "../../store/store";
import {addItemToCart} from "../../store/reducers/cart/card-reducer";

type ProductListContainerType = {
    fillProductsList: () => void,
    addItemToCart: (id:number) => void,
    productsList: any[]
}

const ProductListContainer: FC<ProductListContainerType>  = ({fillProductsList,
                                                                 productsList,
                                                                 addItemToCart}) => {

    useEffect(() => {
        fillProductsList()
    }, []);

    return <ProductsList productsList={productsList} addItemToCart={addItemToCart}/>
}

const mapStateToProps = (state:RootState) => {
    return {
        productsList: state.product.products
    }
}

export default compose(
    connect(mapStateToProps, {
        fillProductsList,
        addItemToCart
    })
)(ProductListContainer)