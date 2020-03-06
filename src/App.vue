<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-btn to="/" text>
          <h2>My Product</h2>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn to="/login" text v-if="!$store.state.token">
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn to="/register" text  v-if="!$store.state.token">
        <span class="mr-2">Register</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn to="/admin" text  v-if="$store.state.token">
        <span class="mr-2">admin</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn text v-if="$store.state.token" @click="$store.commit('logout')">
        <span class="mr-2">logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

</script>
