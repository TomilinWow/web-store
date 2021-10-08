import {FC, useState} from "react";
import {Grid} from "@mui/material";
import {HeaderCart} from "./HeaderCart";
import CartItem from "./CartItem";
import {CartFooter} from "./CartFooter";

type CartType = {
    cart: any[]
    removeCart: () => void,
    removeItem: (id: number, mainPrice: number, quantity: number) => void,
    decreaseItem: (price: number, productId: number, quantity: number) => void,
    increaseItem: (price: number, productId: number, quantity: number) => void,
    total: number,
    postOrder: () => void

}

const Cart: FC<CartType> = ({cart, removeCart,
                                removeItem, decreaseItem,
                                increaseItem, total, postOrder}) => {

    return (
        <Grid container spacing={1}>
            <HeaderCart/>
            {cart.map((item, index) => {
                return <CartItem key={item.name}
                                 number={index + 1}
                                 item={item}
                                 removeItem={removeItem}
                                 decreaseItem={decreaseItem}
                                 increaseItem={increaseItem}
                />
            })}
            <CartFooter postOrder={postOrder} total={total} removeCart={removeCart}/>
        </Grid>

    )
}

export default Cart