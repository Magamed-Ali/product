import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {ChangeEvent} from "react";
import {Dispatch} from "redux";
import {changePageAC} from "../../state/posts-reducer";
import s from "./paginationOutLina.module.css"

type PaginationType = {
    totalPost: number
    postPerPage: number
    dispatch: Dispatch
}
export default function PaginationOutlined({totalPost, postPerPage, dispatch}: PaginationType) {
    return (
        <div className={s.containerPagination}>
            <Stack spacing={2}>
                <Pagination
                    sx={{display: "flex", justifyContent: "center"}}
                    count={postPerPage}
                    variant="outlined"
                    color="primary"
                    defaultPage={1}
                    onChange={(event: ChangeEvent<unknown>, page: number) => dispatch(changePageAC(page))}
                />
            </Stack>
        </div>


    );
}