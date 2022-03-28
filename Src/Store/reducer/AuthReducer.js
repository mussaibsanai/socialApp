import { LOGIN_STATE, SET_USER } from "../action/ActionTypes";

const initialState = {
    user : {},
    logInState : false
} 


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
           return{
            ...state,
            user : action.data
           }

           case LOGIN_STATE:
            return{
             ...state,
             logInState : action.data
            }
        default:
          return state;
    }
}


export default AuthReducer;