import {FormType} from "../Main/Contacts/ContactsForm/ContactsForm";
import {message} from "../DAL/api";
import {RootDispatchThunkType} from "./store";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type AppReducerType = {
    statusApp: RequestStatusType
    errorApp: string | null
}
type ActionsAppType =
    ReturnType<typeof setStatusAC>
    | ReturnType<typeof setErrorAC>

const initialState: AppReducerType = {
    statusApp: 'idle' as RequestStatusType,
    errorApp: null
}

export const appReducer = (state = initialState, action: ActionsAppType): AppReducerType => {
    switch (action.type) {
        case "app/SET_STATUS": {
            return {...state, statusApp: action.payload.status}
        }
        case "app/SET_ERROR": {
            return {...state, errorApp: action.payload.error}
        }
        default:
            return state
    }
}

const setStatusAC = (status: RequestStatusType) => {
    return {
        type: 'app/SET_STATUS',
        payload: {
            status
        }
    } as const
}
export const setErrorAC = (error: string | null) => {
    return {
        type: 'app/SET_ERROR',
        payload: {
            error
        }
    } as const
}

export const sendMessageInEmailTC = (data: FormType) => {
    return async (dispatch: RootDispatchThunkType) => {
        dispatch(setStatusAC('loading'))
        message.sendMessage(data)
            .then(res => {
                if (res.status === 200) {
                    dispatch(setStatusAC('idle'))
                    dispatch(setErrorAC('Message sent'))
                } else {
                    dispatch(setStatusAC('failed'))
                    dispatch(setErrorAC('Message not sent'))
                }
            }).catch((e) => {
            dispatch(setStatusAC('failed'))
            dispatch(setErrorAC('Message not sent'))
        }).finally(() => dispatch(setStatusAC('idle')))
    }
}