<template>
  <v-container>
    <div v-if="!$store.state.token">
      <div v-if="!this.valid">
        <h2>please fill all form !</h2>
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field :rules="[v => !!v || 'You must fill email to continue!']" v-model="email" label="E-mail" required></v-text-field>
        <v-text-field :rules="[v => !!v || 'You must fill password to continue!']" v-model="password" label="Password" type="password" required></v-text-field>
        <v-btn color="success" @click="handelLogin">Login to system</v-btn>
      </v-form>
    </div>
    <div v-else>
      <h1>You are logged in !</h1>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: '',
      email: '',
      password: '',
    }
  }, 
  methods: {
    handelLogin: function() {
      this.$store.dispatch("login", {email: this.email, password: this.password})
    } 
  }
}
</script>
