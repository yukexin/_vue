<style lang="less" scoped>
  @import "../assets/icon";
</style>

<template>
  <span class="icon iconfont" v-bind:class="iconClass"></span>
</template>

<script>
  export default {
    name: "icon-font",
    data() {
      return {};
    },
    props: {
      iconClass: {
        type: String,
        required: true
      }
    },
    components: {},
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
  };
</script>
