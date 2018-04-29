<template>
  <div>
    <app-nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import appNav from './components/Nav.vue'
export default {
  components: {
    appNav
  }
}
</script>
