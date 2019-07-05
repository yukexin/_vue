<style lang="less" scoped>
  @import "../assets/index";
  .container {
    .total {

    }
    .cloud-box {

    }
  }
</style>

<template>
  <div class="container">
    <span class="total">目前共计 32 个标签</span>
    <div class="cloud-box">

    </div>
  </div>
</template>

<script>
  export default {
    name: "tag",
    data() {
      return {};
    },
    props: {},
    components: {},
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
