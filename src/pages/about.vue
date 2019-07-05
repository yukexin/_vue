<style lang="less" scoped>
  @import "../assets/index";
  .container {
    .flex-c-a;
    .about-me {
      font-size: 28px;
      margin-top: 30px;
    }
    .avatar {
      margin-top: 15px;
      width: 165px;
      height: 240px;
    }
    .other-tip {
      padding-top: 30px;
      width: 70%;
    }
  }
</style>

<template>
  <div class="container">
    <span class="about-me">关于博主</span>
    <img class="avatar" src="../../static/me.jpg" mode="aspectFit">
    <div class="other-tip">
      <about-list-item v-for="(item,idx) in aboutArr" v-bind:key="idx" v-bind:p-obj="item" />
    </div>
  </div>
</template>

<script>
  import aboutListItem from "../components/about-list-item";
  export default {
    name: "about",
    data() {
      return {
        aboutArr: [
          { title: 'Blog', arr: ['本博客用于记录平时工作和学习中的知识点，总结经验，用于分享。如有错误地方烦请指正。', '博客重点在于分享web前端、iOS移动端开发知识，或涉其它。'] },
          { title: 'Contact', arr: ['Name：于可心', 'Company：XXX', 'Github：yukexin', 'QQ：693041866', 'Email：kexin6867@sina.com'] },
          { title: 'Donate', arr: [ '如果您觉得有文章能帮助到你，那就请作者喝杯咖啡吧!'] }
        ]
      };
    },
    props: {},
    components: { aboutListItem },
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
