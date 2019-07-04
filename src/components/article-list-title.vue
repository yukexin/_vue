<style lang="less" scoped>
  @import "../assets/index";
  .container {
    .flex-r-a;
    border-bottom: solid 1px red;
    .point {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: red;
    }
    .title {
      margin-left: 30px;
    }
  }
</style>

<template>
  <div class="container">
    <div class="point"></div>
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

