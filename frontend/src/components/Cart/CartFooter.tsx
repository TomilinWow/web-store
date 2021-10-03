import {Button, ButtonGroup, Grid} from "@mui/material";
import {CartStyle, Item} from "./CartStyle";
import {useTheme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {FC} from "react";

type CartFooterType = {
    removeCart: () => void,
    total: number
}

export const CartFooter: FC<CartFooterType> = ({removeCart, total}) => {
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
                            <Button size='medium' variant='contained' color='success'>Order</Button>
                            <Button onClick={() => removeCart()} size='medium' color="error" variant='contained'>Clear all</Button>
                        </ButtonGroup>
                    </Grid>
                </Item>
            </Grid>
    )
}
