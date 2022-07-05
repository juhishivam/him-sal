import axios from 'axios';

export async function AxiosRequest(url, method, headers, params){
return params 
? axios({
    url:url,
    method:method,
    headers:headers,
    data:params,
    timeout:1000
})
:axios({
    url:url,
    method:method,
    headers:headers,
    data:{},
    timeout:1000
})
}

const Postcontacts = (data) => {
    const headers = {
        'Content-Type' : 'application/json',
    };
    return AxiosRequest('http://localhost:3000/api/users','POST' , headers,data)

}
export default Postcontacts;