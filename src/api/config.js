import axios from 'axios'

const api = axios.create({
    baseURL:"https://api-hmugo-web.itheima.net",
    timeout:1000*60
})

api.interceptors.request.use(
    config=>{
        return config;
    },error =>{
        return  Promise.reject(error) 
    }
)

api.interceptors.response.use( response =>{

    if(response.status === 200)
            return Promise.resolve(response.data);
    else
        return Promise.reject(response.data)
})

export default api