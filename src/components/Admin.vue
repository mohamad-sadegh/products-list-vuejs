<template>
  <v-container>
    <div v-if="$store.state.token">
      <h1>Hi, {{ user.name }}</h1>
      <v-btn to="/admin/add-product" >
        <v-icon>mdi-plus</v-icon>
        Add new Product
      </v-btn>
    </div>
  <div v-else>
    <Login />
  </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import Login from './Login'

export default {
  components: {
    Login
  },
  data() {
    return {
      user: []
    }
  }, 
  created() {
    axios.post('http://products.test/api/v1/user', {
      api_token: localStorage.getItem('api_token')
    }).then(response => {
      this.user = response.data
    })
  }
}
</script>
