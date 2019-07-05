<style lang="less" scoped>
  @import "../assets/index";
  @import "../assets/icon";
  .container {
    /*border-bottom:1px solid #000;*/
    margin-bottom: 10px;
    .title {

    }
    .date-box {
      .flex-r-a;
      .tag {
        margin-left: 5px;
      }
    }
    p {

    }
    .read-all-btn {
      color: @title-main-color;
      padding: 5px 10px;
      background: #212f3e;
    }
  }
</style>

<template>
  <div class="container">
    <span class="title">开通博客的第一天</span>
    <div class="date-box">
      <span class="date">2019-09-05</span>
      <span class="tag">vue</span>
    </div>
    <p>为了把 React Native 集成到 Android 原生项目中，踩了很多坑，因为作为web前端开发，本来就不熟悉安卓，参考了网上很多文章，但是都很旧了，而 React Native 已经升级到了 0.55 版本了，入口文件已经合成了一个 index.js，下面的内容也是基于这个版本实践的。</p>
    <span class="read-all-btn" v-on:click="redAllTap">阅读全文</span>
  </div>
</template>

<script>
  export default {
    name: "article-list-item",
    data() {
      return {};
    },
    props: {},
    components: {},
    directives: {},
    computed: {},
    watch: {},
    methods: {
      redAllTap() {

      },
      loadData() {
      }
    },
    onLoad(options) {
      // options === this..$mp.query
    },
    created() {
    },
    mounted() {
    }
  }
</script>
