import {FC, useEffect} from "react";
import ProductsList from "./ProductsList";
import {compose} from "redux";
import {connect} from "react-redux";
import {fillProductsList} from "../../store/reducers/product/product-reducer";
import {RootState} from "../../store/store";

type ProductListContainerType = {
    fillProductsList: () => void,
    productsList: any[]
}

const ProductListContainer: FC<ProductListContainerType>  = ({fillProductsList, productsList}) => {

    useEffect(() => {
        fillProductsList()
    }, []);

    return <ProductsList productsList={productsList}/>
}

const mapStateToProps = (state:RootState) => {
    return {
        productsList: state.product.products
    }
}

export default compose(
    connect(mapStateToProps, {
        fillProductsList,
    })
)(ProductListContainer)