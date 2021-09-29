import {Grid, Paper} from "@mui/material";
import {styles} from "./ProductStyle";
import {productType} from "../../types/product";
import {FC} from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core";

type ProductType = {
    productItem: productType | null
}

const Product: FC<ProductType> = ({productItem}) => {
    const classes = styles()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    if (productItem === null) {
        return <div>Error</div>
    }
    return <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={isMatch ? 12 : 6}>
                <Paper className={classes.paper}>
                    <img className={classes.imageProduct} src={productItem.image} alt=""/>
                </Paper>
            </Grid>
            <Grid item xs={isMatch ? 12 : 6}>
                <Paper className={classes.paper}>

                    <Typography noWrap variant={'h5'}>
                        {productItem.name}
                    </Typography>
                    <Typography>
                        {productItem.category}
                    </Typography>
                    <Typography component='h3' variant='body1'>
                        Price: {productItem.price} $
                    </Typography>

                    <IconButton aria-label="add to shopping cart" color="secondary">
                        <AddShoppingCartIcon/>
                    </IconButton>
                </Paper>
                <Paper className={classes.paperSecond}>
                    <Typography align={"center"} variant={"h5"}>
                        Description
                    </Typography>
                    <Typography>
                        {productItem.description}
                    </Typography>
                </Paper>

            </Grid>
        </Grid>
    </div>
}

export default Product