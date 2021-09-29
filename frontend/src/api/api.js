import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/v1/',
})

export const CategoryAPI = {
    getCategory(){
        return instance.get("category/").then(response => {
            return response.data
        })
    }
}

export const ProductAPI = {
    getProducts(){
        return instance.get("products/").then(response => {
            return response.data
        })
    },
    getProduct(productId){
        return instance.get(`products/${productId}`).then(response => {
            return response.data
        })
    }
}