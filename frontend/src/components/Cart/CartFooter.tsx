import {Button, ButtonGroup, Grid} from "@mui/material";
import {CartStyle, Item} from "./CartStyle";
import {useTheme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {FC} from "react";
import {postOrders} from "../../store/reducers/order/order-reducer";

type CartFooterType = {
    removeCart: () => void,
    total: number,
    postOrder: () => void
}

export const CartFooter: FC<CartFooterType> = ({removeCart, total, postOrder}) => {
    const classes = CartStyle()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
         <Grid item xs={12}>
                <Item className={classes.itemStyle}>
                    <Grid className={`${classes.gridItem} ${classes.gridItemStyle}`} item xs={1}>
                        {isMatch ? 'T' : 'Total'}
                    </Grid>
                    <Grid className={classes.gridItem} item xs={6}>
                    </Grid>
                    <Grid className={`${classes.gridItem} ${classes.gridItemStyle}`} item xs={2}>
                        {total}$
                    </Grid>
                    <Grid className={classes.gridItem} item xs={3}>
                        <ButtonGroup orientation={isMatch ? 'vertical' : "horizontal"} aria-label="text button group">
                            <Button onClick={() => postOrder()} size='medium' variant='contained' color='success'>Order</Button>
                            <Button onClick={() => removeCart()} size='medium' color="error" variant='contained'>Clear all</Button>
                        </ButtonGroup>
                    </Grid>
                </Item>
            </Grid>
    )
}
