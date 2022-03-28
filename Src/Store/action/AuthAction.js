import { LOGIN_STATE, SET_USER } from "./ActionTypes"

export const set_user = (data) => {
    return {
        type : SET_USER,
        data : data,
    }

}

export const set_LoginState = (data) => {
    return {
        type : LOGIN_STATE,
        data : data,
    }

}