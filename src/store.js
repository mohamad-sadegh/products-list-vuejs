import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        meta: [],
        token: localStorage.getItem('api_token') || '',
    },
    mutations: {
        allProducts(state, products) {
            state.products = products
        },
        allMeta(state, meta) {
            state.meta = meta
        },
        setError(state, data) {
            state.error = data
        },
        auth(state, token) {
            state.token = token
        },
        logout(state) {
            state.token = ''
            localStorage.clear('api_token')
        },
        setProduct(state,product) {
            state.products.push(product)
        }
    },
    actions: {
        async getAllProducts({commit}) {
            await axios.get('http://products.test/api/v1/products')
                .then(response => {
                    let products = response.data.data; 
                    let meta = response.data.meta; 
                    commit('allProducts', products)
                    commit('allMeta', meta)
                })
        },
        async register({commit},registerData) {
            await axios.post('http://products.test/api/v1/register', registerData)
                .then(response => {
                    const { api_token } = response.data.data;
                    localStorage.setItem('api_token', api_token)
                    axios.defaults.headers.common['api_token'] = api_token
                    commit('auth', api_token)
                })
                .catch(error=> {
                    console.log(error)
                })
        },
        async login({commit},loginData) {
            await axios.post('http://products.test/api/v1/login', loginData)
                .then(response => {
                    const { api_token } = response.data.data;
                    localStorage.setItem('api_token', api_token)
                    axios.defaults.headers.common['api_token'] = api_token
                    commit('auth', api_token)
                })
                .catch(error=> {
                    console.log(error)
                })
        },
        async createProduct({commit}, createProductData) {
            await axios.post('http://products.test/api/v1/products', createProductData)
                .then(response => {
                    const { data } = response.data;
                    commit('setProduct', data)
                })
                .catch(error=> {
                    console.log(error)
                })
        }
    }
})