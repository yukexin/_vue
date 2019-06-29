<!--node端之所以能识别.vue文件，是因为前面说的webpack在编译时将.vue文件中的html，js，css都抽出来合成新的单独的文件-->

<template>
  <div id="app">
    <home-tabbar />
    <!-- 子页面的内容会注入到router-view -->
    <router-view/>
  </div>
</template>

<script>
  import homeTabbar from "./components/home-tabbar";

  export default {
    name: 'App',
    components: { homeTabbar }
  }
</script>

<style lang="less">
  @import "assets/index";
  @import "assets/theme";
  @import "assets/icon";

  #app {
    margin: 0;
    padding: 100px 0 0 0;
  }
</style>
