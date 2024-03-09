import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../state/store";
import {addTaskTC} from "../../state/posts-reducer";
import PaginationOutlined from "../../components/Pagination/PaginationOutLina";
import Post from './Post/Post';
import Preloader from "../../components/Preloader/Preloader";

export const ContainerPosts = () => {
    const posts = useAppSelector(state => state.postsReducer.posts)
    const totalPost = useAppSelector(state => state.postsReducer.totalPosts)
    const postPerPage = useAppSelector(state => state.postsReducer.postPerPage)
    const postsPage = useAppSelector(state => state.postsReducer.postsPage)
    const dispatch = useAppDispatch()

    const lastPostIndex = postsPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentCountry = posts.slice(firstPostIndex, lastPostIndex)

    console.log(postsPage)
    useEffect(() => {
        dispatch(addTaskTC())
    }, []);

    return (
        <div>
            {
                posts.length ?
                    <Post posts={currentCountry}/> :
                    <Preloader/>
            }
            <PaginationOutlined totalPost={totalPost} postPerPage={postPerPage} dispatch={dispatch}/>
        </div>
    );
}
