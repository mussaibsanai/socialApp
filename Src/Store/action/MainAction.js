import { POSTS_DATA } from "./ActionTypes"


export const set_PostData = (data) => {
    return {
        type : POSTS_DATA,
        data : data,
    }

}

