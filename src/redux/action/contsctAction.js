import { POST_DETAILS } from "../type";
import Postcontacts from "../../api/axiosRequest";

const contactAction = (request) => {
    return function (dispatch){
        dispatch({
            type: POST_DETAILS,
            payload:""
        })
        return Postcontacts(request).then((res) =>{
           
            console.log(res);
            dispatch({
                type: POST_DETAILS,
                payload:true
            })
        })
    }
}
export default contactAction;