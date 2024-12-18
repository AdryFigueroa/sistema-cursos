<template>
  <div id="app">
    <NavBar />
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>