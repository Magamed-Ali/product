import {Dispatch} from "redux";
import {productAPI} from "../api/product-api";

export type postType = {
    body: string
    id: number
    title: string
    userId: number
}

type TodolistPostType = {
    card: postType
}

type setCardType = {
    type: "SET-CARD"
    card: postType
}

type ActionType = setCardType


const initialState: TodolistPostType = {
    card: {
        body: '',
        title: '',
        userId: 0,
        id: 0
    },
}

export const cardReducer = (state: TodolistPostType = initialState, action: ActionType): TodolistPostType => {
    switch (action.type) {
        case 'SET-CARD':
            return {...state, card: action.card}
        default:
            return state
    }
}


export const setCardAC = (card: postType) => ({type: "SET-CARD", card} as const)

export const addCardTC = (id: number) => {
    return (dispatch: Dispatch<setCardType>) => {

        productAPI.get_post_card(id)
            .then(res => {
                dispatch(setCardAC(res.data))
            })
    }
}

