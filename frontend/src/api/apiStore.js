import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/v1/',
})

export const CategoryAPI = {
    getCategory() {
        return instance.get("category/").then(response => {
            return response.data
        })
    }
}

export const ProductAPI = {
    getProducts(page, page_size = 8, sort = '', filters = []) {
        let str = `page=${page}&page_size=${page_size}`;
        if (sort !== '') {
            str += `&ordering=${sort}`
        }
        return instance.get(`products/?${str}`).then(response => {
            return response.data
        })
    },
    getProduct(productId) {
        return instance.get(`products/${productId}`).then(response => {
            return response.data
        })
    },
    searchProduct(q) {
        return instance.get(`items?search=${q}`).then(response => {
            return response.data
        })
    }
}

export const AuthAPI = {
    getCookie(q) {
        return instance.get(`cookies`).then(response => {
            return response.data
        })
    },
    setCookie(id) {
        return instance.post(`set_cookies/${id}`).then(response => {
            return response.data
        })
    },
    setCities() {
        return instance.get(`cities/`).then(response => {
            return response.data
        })
    }
}