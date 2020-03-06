<template>
  <v-container>
    <h1>Create New Prodoct</h1>
    <hr>
    <br>
    <div v-if="$store.state.token">
      <v-alert type="error" v-if="!this.valid">
        please fill all form !
      </v-alert>
      <v-alert type="success" v-if="this.created">
        product is created !
      </v-alert>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field outlined :rules="[v => !!v || 'You must fill name to continue!']" v-model="title" label="Title" required ></v-text-field>
        <v-text-field outlined :rules="[v => !!v || 'You must fill email to continue!']" v-model="slug" label="Slug" required></v-text-field>
        <v-text-field outlined :rules="[v => !!v || 'You must fill email to continue!']" v-model="price" label="price" required></v-text-field>
        <v-text-field outlined :rules="[v => !!v || 'You must fill email to continue!']" v-model="photo_path" label="Photo Path" required></v-text-field>
        <v-text-field outlined :rules="[v => !!v || 'You must fill email to continue!']" v-model="attachment_path" label="Attachemnt path" required></v-text-field>
        <v-textarea
        outlined
        v-model="body"
        name="input-7-4"
        label="Product Description"
        value=""
        ></v-textarea>
        <v-btn to="/admin/add-product" color="blue" text @click="createProduct">
            <v-icon>mdi-plus</v-icon>
            Add new Product
        </v-btn>
      </v-form>
    </div>
  <div v-else>
    <Login />
  </div>
  </v-container>
</template>

<script>
import Login from './Login'

export default {
  components: {
    Login
  },
  data() {
    return {
      valid: '',
      title: '',
      slug: '',
      body: '',
      price: '',
      photo_path: '',
      attachment_path: '',
      created: false
    }
  }, 
  methods: {
    createProduct: function() {
      this.$store.dispatch("createProduct", 
        {
          title: this.title,
          slug: this.slug,
          body: this.body,
          price: this.price,
          photo_path: this.photo_path,
          attachment_path: this.attachment_path,
          api_token: this.$store.state.token
        }
      )
      this.created = true
    } 
  }
}
</script>
