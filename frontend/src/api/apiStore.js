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
        let categories = ''
        for (let filter in filters) {
            categories += `${filters[filter]},`
        }
        str += `&category=${categories}`
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
    setCities() {
        return instance.get(`cities/`).then(response => {
            return response.data
        })
    }
}

export const OrderAPI = {
    setOrders() {
        return instance.get(`orders/`).then(response => {
            return response.data
        })
    },
    removeOrders() {
        return instance.delete(`remove/`).then(response => {
            return response.data
        })
    },
    postOrders() {
        return instance.post(`set_order/`).then(response => {
            return response.data
        })
    }
}