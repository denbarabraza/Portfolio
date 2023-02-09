import {AnyAction, applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import thunk, {ThunkDispatch} from 'redux-thunk';
import {appReducer} from "./appReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer=combineReducers({
    app:appReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export type RootStoreType = ReturnType<typeof rootReducer>
export type RootDispatchThunkType = ThunkDispatch<RootStoreType, any, AnyAction>
export const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector
export const RootDispatch = () => useDispatch<RootDispatchThunkType>()

