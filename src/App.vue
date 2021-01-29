<template>
  <div id="app">
    <TopMenu/>
    <router-view />
  </div>
</template>
<script>
    import TopMenu from "./components/topmenu.vue";
    export default {
        components: {TopMenu},
        methods: {},
    }
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: transparent;
    width: 100%;
    padding-top: 64px;
  }

  .app_div {
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;

    .content {
      flex: 1;
      width: 100%;
      overflow-y: auto;
    }
  }

  .please_div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 18px;
      font-weight: 500;
    }
  }
</style>
