<template>
  <v-container>
    <h1>{{ product.title }}</h1>
    <img v-bind:src="product.photo" v-bind:title="product.title">
    <p>Author : {{ product.user }}</p>
    <p>Price is : {{ product.price }}</p>
    <p>{{ product.body }}</p>
    <p>{{ product.body }}</p>

    <v-card-actions>
      <v-btn to="/" flat color="blue accent-4">
        Buy product
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      product: []
    }
  },
  async created () {
    await axios.get(`http://products.test/api/v1/products/${this.$route.params.id}`)
      .then(responce => {
        this.product = responce.data.data
      })
  }
}
</script>
