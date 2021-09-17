import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/v1/',


})
export const ProfileAPI = {
    getProfile(){
        debugger
        return instance.get("http://127.0.0.1:8000/api/v1/category/").then(response => {
            return response.data
        })
    }

}