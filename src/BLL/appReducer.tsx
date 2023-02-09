import {FormType} from "../Main/Contacts/ContactsForm/ContactsForm";
import {message} from "../DAL/api";
import {RootDispatchThunkType} from "./store";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type AppReducerType = {
    statusApp: RequestStatusType
}
type ActionsAppType = ReturnType<typeof setStatusAC>

const initialState: AppReducerType = {
    statusApp: 'idle' as RequestStatusType,
}

export const appReducer = (state = initialState, action: ActionsAppType): AppReducerType => {
    switch (action.type) {
        case "app/SET_STATUS": {
            return {...state, statusApp: action.payload.status}
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

export const sendMessageInEmailTC = (data: FormType) => {
    return async (dispatch: RootDispatchThunkType) => {
        dispatch(setStatusAC('loading'))
        message.sendMessage(data)
            .then(res=>{
                if(res.status===200) {
                    dispatch(setStatusAC('idle'))
                }
                else {
                    dispatch(setStatusAC('failed'))
                }
            }).catch((e)=>{
            dispatch(setStatusAC('failed'))
        }).finally(()=>dispatch(setStatusAC('idle')))
    }}