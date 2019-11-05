<template>
  <v-container class="home">
    <v-layout wrap>
      <h1>This is an about page</h1>
      <v-btn color="primary" @click="focusParentPostMessage">Focus Parent Post Message</v-btn>
      <hr class="my-2">
      <v-btn color="primary" @click="focusParentOpener">Focus Parent Parent Opener</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  methods: {
    focusParentPostMessage() {
      window.opener.postMessage('message', 'http://localhost:8080')
    },
    focusParentOpener() {
      // Set focus using child window
      window.opener.focus()
    }
  },
  mounted() {
    // window.resizeTo(100, 100)
  }
}
</script>
