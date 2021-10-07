import {Box, Button, Grid, Typography} from "@mui/material";
import {FC} from "react";
import {OrderItem} from "./OrderItem";
import {orderType} from "../../types/order";
import {removeOrders} from "../../store/reducers/order/order-reducer";

type OrderType = {
    orders: orderType[],
    removeOrders: () => void
}

export const Order: FC<OrderType> = ({orders, removeOrders}) => {

    return (
        <Grid container spacing={1}>
            <Typography variant='h5'>
                Orders
            </Typography>
            {orders.map((order, index) => {
                return <OrderItem index={index + 1} order={order}/>
            })}
            {orders.length === 0
                ? <>
                </>
                :
                <Box mt={1} ml={'auto'} mr={'auto'}>
                    <Button onClick={() => removeOrders()} size='medium' color="error" variant='contained'>Clear
                        all</Button>
                </Box>}

        </Grid>
    )
}