import {AnyAction, applyMiddleware, combineReducers, legacy_createStore, Reducer} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";

import {cardReducer} from "./card-reducer";
import {postsReducer} from "./posts-reducer";

const rootReducer = combineReducers({
        postsReducer,
        cardReducer
    }
)

export const store = legacy_createStore(rootReducer as Reducer<Partial<AppRootStateType>>, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;
