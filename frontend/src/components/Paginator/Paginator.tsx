import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {PaginatorStyles} from "./PaginatorStyle";
import {FC} from "react";

type MyPaginationType = {
    changePage: (curPage: number) => void,
    pages: number,
}

const MyPagination: FC<MyPaginationType> = ({changePage, pages}) => {
    const classes = PaginatorStyles()
    return (
        <Stack spacing={2}>
            <Pagination
                onChange={(e:any) => changePage(Number(e.target.textContent))}
                className={classes.root}
                count={pages}/>
        </Stack>
    );
}
export default MyPagination