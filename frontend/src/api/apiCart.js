import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/v2/',
})

export const CartAPI = {
    getCart(){
        return instance.get("cart/").then(response => {
            return response.data
        })
    },
    getLengthCart(){
        return instance.get("length/").then(response => {
            return response.data
        })
    },
    addItem(itemId){
        return instance.post(`add/${itemId}/`).then(response => {
            return response.data
        })
    },
    removeItem(itemId){
        return instance.delete(`remove/${itemId}/`).then(response => {
            return response.data
        })
    },
    decreaseCountItem(itemId){
        return instance.delete(`decrease/${itemId}/`).then(response => {
            return response.data
        })
    },
    clearCart(){
        return instance.delete(`clear/`).then(response => {
            return response.data
        })
    },
    totalCart(){
        return instance.get(`total/`).then(response => {
            return response.data
        })
    }
}
