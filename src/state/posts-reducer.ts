import {Dispatch} from "redux";
import {productAPI} from "../api/product-api";

export type postType = {
    body: string
    id: number
    title: string
    userId: number
}
export type TodolistPostType = {
    posts: Array<postType>,
    loading: boolean
    totalPosts: number
    postPerPage: number
    postsPage: number
}
type setTodosType = {
    type: "SET-TODOS"
    posts: Array<postType>
}
type changePageAC = {
    type: "CHANGE-PAGE"
    postsPage: number
}

type ActionType = setTodosType | changePageAC


const initialState: TodolistPostType = {
    posts: [],
    loading: true,
    totalPosts: 0,
    postPerPage: 10,
    postsPage: 1
}

export const postsReducer = (state: TodolistPostType = initialState, action: ActionType): TodolistPostType => {
    switch (action.type) {
        case 'SET-TODOS':
            return {...state, posts: action.posts, totalPosts: state.posts.length}
        case 'CHANGE-PAGE':
            return {...state, postsPage: action.postsPage}
        default:
            return state
    }
}

export const setTodosAC = (posts: Array<postType>) => ({type: "SET-TODOS", posts} as const)
export const changePageAC = (postsPage: number) => ({type: "CHANGE-PAGE", postsPage} as const)

export const addTaskTC = () => {
    return (dispatch: Dispatch<setTodosType>) => {

        productAPI.get_posts()
            .then(res => {
                dispatch(setTodosAC(res.data))
            })
    }
}

