import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import react from '../../images/react.png'
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({

    gridContent: {
        marginTop: 15
    },
    cardItem: {
        backgroundColor: 'white',
        color: 'black'
    },
    cart: {
        backgroundColor: 'linear-gradient(45deg, #61dafb 30%, #61dafb 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }
}))

const ProductsList = () => {
    const classes = useStyles();
    return (
        <Grid container spacing='4' className={classes.gridContent}>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs='6' sm='3'>
                <Card className={classes.cardItem}>
                    <CardMedia component='img' image={react} title={'Product'} sx={{height: 140}}/>
                    <CardContent>
                        <Typography component='h3' variant='h6'>
                            Product
                        </Typography>
                        <Typography component='h3' variant='body1'>
                            Price: 100$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={() => {
                        }}>
                            buy
                        </Button>
                        <IconButton aria-label="add to shopping cart"  color="secondary">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>
    )
}
export default ProductsList;