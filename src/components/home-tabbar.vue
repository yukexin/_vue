<style lang="less" scoped>
  @import "../assets/index";
  @import "../assets/theme";

  .container {
    .flex-r-between;
    .absolute;
    background: rgb(33,47,62);
    left: 0;
    top: 0;
    right: 0;
    padding: 30px 20px;
    color: @title-main-color;

    .title {
      font-size: 30px;
    }
    .right-box {
      .flex-r-around;
      /*width: 250px;*/
      .menu {
        .menu-title {
          margin-left: 2px;
        }
      }
    }
  }
</style>

<template>
  <div class="container">
    <span class="title">得劲的博客</span>
    <div class="right-box">
      <div v-for="(item,idx) in titles" v-bind:key="idx" v-on:click="menuTap(idx)" class="menu">
        <icon-font v-bind:icon-class="item.icon_class" />
        <span class="menu-title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import IconFont from "./icon-font";
  export default {
    name: "home-tabbar",
    data() {
      return {
        titles: [{ title: '首页', icon_class: 'icon-home', url: '/' }, { title: '标签', icon_class: 'icon-tag', url: '/tag' }, { title: '关于我', icon_class: 'icon-about', url: '/about' }]
      };
    },
    props: {},
    components: {IconFont},
    directives: {},
    computed: {},
    watch: {},
    methods: {
      menuTap(idx) {
        // this.$router.push({path: '/about/order', query: {selected: "2"}});
        let path = this.titles[idx].url
        this.$router.push({ path });
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
