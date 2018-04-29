<template>
    <nav v-once>
        <router-link v-for="link in links" :key="link.name" :to="link.path">{{link.name}}</router-link>
    </nav>
</template>

<script>
export default {
  name: "app-nav",
  data: () => ({
    links: [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About' },
    ],
  })
}
</script>

<style lang="less" scoped>
nav{
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #2a004088;
    a {
        padding: 5px 10px 5px 10px;
        transition: all .2s ease-in-out;
        text-decoration: none;
        font-size: 1.2em;
        color:#2a0053;
        border-radius: 3px;
        &:hover {
            background: #c5a2fa5e;
        }
    }
}
</style>
