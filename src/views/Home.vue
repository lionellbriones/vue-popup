<template>
  <v-container class="home">
    <v-layout wrap>
      <h1>Welcome to Your Vue.js App</h1>
      <v-flex xs12>
        <v-btn color="primary" depressed @click="clickNewTab">Open New Tab</v-btn>
        <v-divider class="my-1" />
        <v-btn color="primary" depressed @click="updateUrl">Update URL</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  methods: {
    clickNewTab() {
      this.$store.dispatch('openNewTab')
    },
    updateUrl() {
      this.$store.state.childWindow.location = 'http://www.google.com'
      this.$store.state.childWindow.focus()
    },
    mounted() {
    }
  }
}
</script>
