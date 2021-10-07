import {FC} from "react";
import {CartStyle, Item} from "../Cart/CartStyle";
import {Grid} from "@mui/material";
import {orderType} from "../../types/order";


type OrderItemType = {
    order: orderType,
    index: number
}

export const OrderItem: FC<OrderItemType> = ({order, index}) => {
    const classes = CartStyle()
    return (
        <Grid item xs={12}>
            <Item className={classes.itemStyle}>
                <Grid className={`${classes.gridItem} ${classes.index}`} item xs={1}>
                    {index}
                </Grid>
                <Grid className={`${classes.gridItem} ${classes.items}`} item xs={5}>
                    {order.cart.map((item, index) => {
                        return <div>{index + 1}. {item}</div>
                    })}
                </Grid>
                <Grid className={classes.gridItem} item xs={3}>
                    {order.created_at}
                </Grid>
                <Grid className={classes.gridItem} item xs={3}>
                    {order.location}
                </Grid>
            </Item>
        </Grid>
    )
}