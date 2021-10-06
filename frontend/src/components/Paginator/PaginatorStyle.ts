import {makeStyles} from "@material-ui/core/styles";


export const PaginatorStyles = makeStyles((theme) => ({
    root: {
        '& .Mui-selected': {
            backgroundColor: 'transparent',
            color: '#00b8eb',
        },
    }
}))