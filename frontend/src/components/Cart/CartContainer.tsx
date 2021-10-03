import {FC, useEffect} from "react";
import Cart from "./Cart";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {
    addItemToCart, decreaseCountItem, decreaseTotalAC,
    increaseTotalAC,
    removeCart,
    removeItem,
    setCart,
} from "../../store/reducers/cart/card-reducer";

type CartContainerType = {
    setCart: () => void,
    removeCart: () => void,
    removeItem: (id: number) => void,
    increaseTotalAC: (price: number) => void,
    decreaseTotalAC: (price: number) => void,
    decreaseCountItem: (id: number) => void,
    addItemToCart: (id: number) => void,
    cart: any[],
    total: number
}
const CartContainer: FC<CartContainerType> = ({
                                                  setCart, cart, removeCart,
                                                  removeItem, increaseTotalAC, decreaseTotalAC,
                                                  decreaseCountItem, addItemToCart, total
                                              }) => {

    useEffect(() => {
        setCart()
    }, [])

    const increaseItem = (price: number, productId: number) => {
        increaseTotalAC(price)
        if (productId !== 0){
            addItemToCart(productId)
        }

    }
    const decreaseItem = (price: number, productId: number) => {
        decreaseTotalAC(price)
        decreaseCountItem(productId)

    }
    return <div>
        <Cart increaseItem={increaseItem}
              decreaseItem={decreaseItem}
              removeCart={removeCart}
              removeItem={removeItem}
              cart={cart}
              total={total}/>
    </div>
}

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart.cart,
        total: state.cart.total
    }
}

export default connect(mapStateToProps, {
    setCart,
    removeCart,
    removeItem,
    increaseTotalAC,
    decreaseTotalAC,
    decreaseCountItem,
    addItemToCart

})(CartContainer)