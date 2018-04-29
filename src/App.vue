<template>
  <div class="full-width">
    <app-nav/>
    <div class="content">
      <router-view></router-view>
    </div>
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
.content {
  padding: 20px;
}
</style>
