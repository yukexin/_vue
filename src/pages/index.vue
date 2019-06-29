<style lang="less" scoped>

</style>

<template>
  <div class="container">
      <article-list-item v-for="(item,idx) in [0,1,2,3,4,5,6,7]" v-bind:key="idx" />
  </div>
</template>

<script>
  import ArticleListItem from "../components/article-list-item";
  export default {
    name: "index",
    data() {
      return {};
    },
    props: {},
    components: {ArticleListItem},
    directives: {},
    computed: {},
    watch: {},
    methods: {
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
