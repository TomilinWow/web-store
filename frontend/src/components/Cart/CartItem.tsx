import {FC, useEffect, useState} from "react";
import {Button, ButtonGroup, Fab, Grid} from "@mui/material";
import {CartStyle, Item} from './CartStyle'
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core";
import {cartItemType} from "../../types/cart";


type CartType = {
    item: cartItemType,
    number: number
    removeItem: (id: number, mainPrice: number, quantity: number) => void,
    decreaseItem: (price: number, productId: number, quantity: number) => void,
    increaseItem: (price: number, productId: number, quantity: number) => void,
}

const CartItem: FC<CartType> = ({item, number, removeItem, decreaseItem, increaseItem}) => {

    const [quantity, setQuantity] = useState(item.quantity)

    useEffect(()=> {
        setQuantity(item.quantity)
    }, [])

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
        increaseItem(Number(item.price), item.id, quantity + 1)
    }
    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
        decreaseItem(Number(item.price), item.id, quantity + 1)
    }

    const classes = CartStyle()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid item xs={12}>
            <Item className={classes.itemStyle}>
                <Grid className={classes.gridItem} item xs={1}>
                    {number}
                </Grid>
                <Grid className={`${classes.gridItem}`} item xs={3}>
                    {item.name}
                </Grid>
                <Grid className={classes.gridItem} item xs={3}>
                    {quantity}
                </Grid>
                <Grid className={classes.gridItem} item xs={2}>
                    {quantity * Number(item.price)}$
                </Grid>
                <Grid className={classes.gridItem} item xs={3}>
                    <ButtonGroup orientation={isMatch ? 'vertical' : "horizontal"} aria-label="text button group">
                        <Button disabled={quantity === 1} onClick={() => decreaseQuantity()} color='primary'>
                            <RemoveRoundedIcon/>
                        </Button>
                        <Button onClick={
                            () => removeItem(item.id, quantity * Number(item.price), quantity)
                        } color='error'>
                            <DeleteForeverOutlinedIcon/>
                        </Button>
                        <Button onClick={() => increaseQuantity()} color='success'><AddIcon/></Button>
                    </ButtonGroup>

                </Grid>
            </Item>
        </Grid>

    )
}

export default CartItem