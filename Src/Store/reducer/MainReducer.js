import { POSTS_DATA } from "../action/ActionTypes";

const initialState = {
   posts : [],
} 


const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_DATA:
        return {
            ...state,
            posts : action.data,
        }    
        
    
        default:
         return state;
           
    }
}


export default MainReducer;