<style lang="less" scoped>
  @import "../assets/index";
  /*这里为什么穿透了？如果用container，和外层的合并了*/
  .article-list-title {
    .flex-r-a;
    z-index: 5;
    height: 70px;
    border-bottom: dashed 1px rgb(173,173,173);
    .point {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgb(173,173,173);
    }
    .title {
      margin-left: 20px;
    }
  }
</style>

<template>
  <div class="article-list-title">
    <span class="point"></span>
    <div class="title">09-03 实战计算器应用</div>
  </div>
</template>

<script>
  export default {
    name: "article-list-title",
    data() {
      return {}
    },
    props: {},
    components: {},
    computed: {},
    watch: {},
    methods: {},
    created() {
    },
    mounted() {
    },
    destroyed() {
    },
    onShow() {
    },
    onLoad() {
    }
  }
</script>

