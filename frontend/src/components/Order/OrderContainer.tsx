import {Order} from "./Order";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {removeOrders, setOrders} from "../../store/reducers/order/order-reducer";
import {FC, useEffect} from "react";
import {orderType} from "../../types/order";

type OrderContainerType = {
    setOrders: () => void,
    orders: orderType[],
    removeOrders: () => void
}

const OrderContainer: FC<OrderContainerType> = ({setOrders, orders, removeOrders}) => {

    useEffect(()=>{
        setOrders()
    }, [])

    return (
        <Order removeOrders={removeOrders} orders={orders}/>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        orders: state.order.orders
    }
}
export default connect(mapStateToProps, {
    setOrders,
    removeOrders
})(OrderContainer)