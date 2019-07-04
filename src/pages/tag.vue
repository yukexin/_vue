<style lang="less" scoped>
  @import "../assets/index";
  .container {
    .total {
      text-align: center;
      width: 100%;
      /*background: red;*/
    }
    .menu-box {
      .flex-c;
      .menu-item {
        .flex-r-a;
        .title {
          text-decoration: underline;
        }
        margin-bottom: 10px;
      }

    }
  }
</style>

<template>
  <div class="container">
    <div class="total">目前共 8 个分类</div>
    <div class="menu-box">
      <div v-for="(item,idx) in category" v-bind:key="idx" class="menu-item" v-on:click="menuTap">
        <span class="title">{{ item.title }}</span>
        <span>({{ item.num }})</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tag",
    data() {
      return {
        category: [
          { title: 'CSS', num: 1 },
          { title: 'HTML', num: 1 },
          { title: 'JavaScript', num: 1 },
          { title: 'Node', num: 1 },
          { title: 'Vue', num: 1 },
          { title: '小程序', num: 1 },
        ]
      };
    },
    props: {},
    components: {},
    directives: {},
    computed: {},
    watch: {},
    methods: {
      menuTap() {
        let path = '/article'
        this.$router.push({ path })
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
