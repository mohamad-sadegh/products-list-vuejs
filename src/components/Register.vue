<template>
  <v-container>
    <div v-if="!$store.state.token">
      <v-alert type="error" v-if="!this.valid">
        please fill all form !
      </v-alert>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field :rules="[v => !!v || 'You must fill name to continue!']" v-model="name" label="Name" required ></v-text-field>
        <v-text-field :rules="[v => !!v || 'You must fill email to continue!']" v-model="email" label="E-mail" required></v-text-field>
        <v-text-field :rules="[v => !!v || 'You must fill password to continue!']" v-model="password" label="Password" type="password" required></v-text-field>
        <v-text-field :rules="[v => !!v || 'You must fill password to continue!']" v-model="passwordConf" label="Password Confirmation" type="password" required></v-text-field>
        <v-btn color="success" @click="handelRegister">Register to system</v-btn>
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
      name: '',
      email: '',
      password: '',
      passwordConf: '',
    }
  }, 
  methods: {
    handelRegister: function() {
      this.$store.dispatch("register", {name: this.name ,email: this.email, password: this.password,password_confirmation: this.passwordConf})
    } 
  }
}
</script>
