import {FC, useEffect} from "react";
import {RootState} from "../../store/store";
import {connect} from "react-redux";
import {getProductDetail} from "../../store/reducers/product/product-reducer";
import {productType} from "../../types/product";
import {compose} from "redux";
import {useParams} from "react-router-dom";
import Product from "./Product";

type ProductContainerType = {
    getProductDetail: (id: string) => void
    product: productType
}

const ProductContainer: FC<ProductContainerType> = ({getProductDetail, product}) => {

    let params: any = useParams()
    useEffect(() => {
        getProductDetail(params.id)
    }, [])

    return <Product productItem={product}/>
}

const mapStateToProps = (state: RootState) => {
    return {
        product: state.product.product
    }
}


export default compose(
    connect(mapStateToProps, {
        getProductDetail
    })
)(ProductContainer)