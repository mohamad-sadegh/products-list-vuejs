<template>
  <v-container>
    <h1>My Product List :</h1>
    <v-row>
      <v-col v-for="(product, index) in $store.state.products" :key="index" cols="4">
        <v-card class="mx-auto">
          <v-img v-bind:src="product.photo" v-bind:title="product.title"></v-img>
          <v-card-text>
            <p class="title text--primary">
              {{ product.title }}
              {{ product.slug }}
            </p>
            <p class="text subtitle-2 font-weight-black">Price : {{ product.price }}</p>
            <div class="text--primary">
              {{ product.body }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn v-bind:to="'product/' + product.slug" text color="blue accent-4">
              Buy product
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
