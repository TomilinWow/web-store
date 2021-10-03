import {Grid} from "@mui/material";
import {CartStyle, Item} from "./CartStyle";



export const HeaderCart = () => {
    const classes = CartStyle()
    return (
         <Grid item xs={12}>
                <Item className={`${classes.itemStyle}`}>
                    <Grid className={`${classes.gridItem} ${classes.gridItemStyle}`} item xs={1}>
                        №
                    </Grid>
                    <Grid className={`${classes.gridItem} ${classes.gridItemStyle}`} item xs={3}>
                        Product
                    </Grid>
                    <Grid className={`${classes.gridItem} ${classes.gridItemStyle}`} item xs={3}>
                        Quantity
                    </Grid>
                    <Grid className={`${classes.gridItem} ${classes.gridItemStyle}`} item xs={2}>
                        Total
                    </Grid>
                    <Grid className={`${classes.gridItem} ${classes.gridItemStyle}`} item xs={3}>
                        dec / del / inc
                    </Grid>
                </Item>
            </Grid>
    )
}