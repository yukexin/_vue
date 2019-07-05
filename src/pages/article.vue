<style lang="less" scoped>
  @import "../assets/index";
  .container {
    padding: 0px 20px;
    .article-box {
      .relative;
      .flex-c;
      margin-top: 40px;
      .time-line {
        .absolute;
        left: 0;
        top: 0;
        width: 10px;
        background: rgb(242,242,242);
        height: 100%;
      }
    }
  }
</style>

<template>
  <div class="container">
     <div class="article-box">
       <span class="time-line"></span>
       <article-list-title v-for="(item,idx) in [0,1,2,3,4,5,6,7]" v-bind:key="idx" />
     </div>
  </div>
</template>

<script>
  import ArticleListTitle from "../components/article-list-title";
  export default {
    name: "article",
    data() {
      return {}
    },
    props: {},
    components: { ArticleListTitle },
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

