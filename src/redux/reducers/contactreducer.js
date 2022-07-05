import {POST_DETAILS} from '../type'

const initialstate = {
    isResponse:false
}

const Reducer = (state = initialstate,action) => {
    switch (action.type){
       case POST_DETAILS:
           return {
            isResponse:action.payload,
           };
           default:
               return state;
    }
}
export default Reducer;