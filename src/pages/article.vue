<style lang="less" scoped>
  @import "../assets/index";
  .container {
    .flex-c;
  }
</style>

<template>
  <div class="container">
    <article-list-title v-for="(item,idx) in [0,1,2,3,4,5,6,7]" v-bind:key="idx" />
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
    components: {ArticleListTitle},
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

