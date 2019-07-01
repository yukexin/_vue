<style lang="less" scoped>
  @import "../assets/index";
.container {
  .flex-c;
  align-items: flex-start;
  .title {
    font-size: 25px;
    font-weight: bold;
  }
  p {
  }
}
</style>

<template>
  <div class="container">
    <span class="title">{{ pObj.title }}</span>
    <p v-for="(item,idx) in pObj.arr" v-bind:key="idx">{{ item }}</p>
  </div>
</template>

<script>
  export default {
    name: "about-list-item",
    data() {
      return {};
    },
    props: {
      pObj: Object,
    },
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
