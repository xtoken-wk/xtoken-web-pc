<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;
  }

  @font-face {
    font-family: 'NunitoSans-Regular';
    src: url('../static/fonts/NunitoSans-Regular.ttf');
  }
</style>
