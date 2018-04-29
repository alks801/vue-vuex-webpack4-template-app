<template>
  <div class="full-width">
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

<style lang="less" scoped>
.full-width {
  width: 100vw;
}
</style>
