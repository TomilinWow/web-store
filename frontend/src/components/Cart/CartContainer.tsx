import {FC, useEffect} from "react";
import Cart from "./Cart";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {
    addItemToCart, decreaseCountItem, decreaseTotalAC,
    increaseTotalAC,
    removeCart,
    removeItem,
    setCart, setTotal,
} from "../../store/reducers/cart/card-reducer";
import {postOrders} from "../../store/reducers/order/order-reducer";

type CartContainerType = {
    setCart: () => void,
    removeCart: () => void,
    removeItem: (id: number, mainPrice: number, quantity: number) => void,
    increaseTotalAC: (price: number,  productId: number, quantity: number) => void,
    decreaseTotalAC: (price: number,  productId: number, quantity: number) => void,
    decreaseCountItem: (id: number) => void,
    addItemToCart: (id: number) => void,
    cart: any[],
    total: number,
    setTotal: () => void,
    postOrders: (id: number) => void,
    cityId: any
}
const CartContainer: FC<CartContainerType> = ({
                                                  setCart, cart, removeCart,
                                                  removeItem, increaseTotalAC, decreaseTotalAC,
                                                  decreaseCountItem, addItemToCart, total,
                                                  setTotal, postOrders, cityId
                                              }) => {

    useEffect(() => {
        setCart()
        setTotal()
    }, [])

    const increaseItem = (price: number, productId: number,  quantity: number) => {
        increaseTotalAC(price, productId, quantity)
        if (productId !== 0) {
            addItemToCart(productId)
        }

    }
    const decreaseItem = (price: number, productId: number, quantity: number) => {
        decreaseTotalAC(price, productId, quantity)
        decreaseCountItem(productId)

    }
    const postOrder = () => {
        if (cityId !== 0){
            postOrders(cityId)
            removeCart()
        }
    }

    return <div>
        <Cart increaseItem={increaseItem}
              decreaseItem={decreaseItem}
              removeCart={removeCart}
              removeItem={removeItem}
              cart={cart}
              total={total}
              postOrder={postOrder}/>
    </div>
}

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart.cart,
        total: state.cart.total,
        cityId: state.auth.cityId
    }
}

export default connect(mapStateToProps, {
    setCart,
    removeCart,
    removeItem,
    increaseTotalAC,
    decreaseTotalAC,
    decreaseCountItem,
    addItemToCart,
    setTotal,
    postOrders

})(CartContainer)