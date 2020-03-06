import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store.js';
import VueRouter from 'vue-router';
// components
import Products from './components/Products'
import Product from './components/Product'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Admin'
import AdminAddProduct from './components/AdminAddProduct'

Vue.config.productionTip = false

// config vue routers
Vue.use(VueRouter)

const routes = [
  {path: "/", component: Products},
  {path: "/product/:id", component: Product},
  {path: "/login", component: Login},
  {path: "/register", component: Register},
  {path: "/admin", component: Admin},
  {path: "/admin/add-product", component: AdminAddProduct},
]

const router = new VueRouter({routes, mode: 'history'})

// new vue
new Vue({
  vuetify,store,router,
  render: h => h(App)
}).$mount('#app')
