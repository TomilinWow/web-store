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
    removeItem: (id: number) => void,
    decreaseItem: (price: number, productId: number) => void,
    increaseItem: (price: number, productId: number) => void,
}

const CartItem: FC<CartType> = ({item, number, removeItem, decreaseItem, increaseItem}) => {

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(item.quantity)
        increaseItem(Number(item.price) * item.quantity, 0)
    }, [])

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
        increaseItem(Number(item.price), item.id)
    }
    const decreaseQuantity = () => {
        setQuantity(quantity + 1)
        if (quantity === 0) {
            removeItem(item.id)
        } else {
            setQuantity(quantity - 1)
            decreaseItem(Number(item.price), item.id)
        }

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
                        <Button onClick={() => decreaseQuantity()} color='primary'><RemoveRoundedIcon/></Button>
                        <Button onClick={() => removeItem(item.id)} color='error'><DeleteForeverOutlinedIcon/></Button>
                        <Button onClick={() => increaseQuantity()} color='success'><AddIcon/></Button>
                    </ButtonGroup>

                </Grid>
            </Item>
        </Grid>

    )
}

export default CartItem