<style lang="less" scoped>
  @import "../assets/index";
  .domain-contain {
    .flex-c;
    &-item {
      .flex-r-around;
    }
  }
</style>

<template>
  <div id="domain-contain">
    <div v-for="(item,idx) in defaultWords" v-bind:key="idx" class="domain-contain-item">
      <span>{{ item.domain_name }}</span>
      <span>{{ item.domain_price }}</span>
      <span>{{ item.address }}</span>
    </div>
<!--    <word-cloud-->
<!--      :data="defaultWords"-->
<!--      nameKey="address"-->
<!--      valueKey="address"-->
<!--      :color="myColors"-->
<!--      :showTooltip="true"-->
<!--      :wordClick="wordClickHandler" />-->
  </div>
</template>

<script>
  import wordCloud from 'vue-wordcloud'
  import {domainList} from "../api/domain";

  export default {
    name: "domain",
    data() {
      return {
        myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
        defaultWords: [
          // {
          //   "name": "Alidaxia",
          //   "value": 26
          // },
          // {
          //   "name": "xinwenti",
          //   "value": 19
          // },
          // {
          //   "name": "maipiaopiao",
          //   "value": 18
          // },
          // {
          //   "name": "dutalk",
          //   "value": 16
          // },
          // {
          //   "name": "lvmang",
          //   "value": 15
          // },
          // {
          //   "name": "keeppet",
          //   "value": 9
          // }
        ]
      }
    },
    props: {},
    components: {
      wordCloud
    },
    directives: {},
    computed: {},
    watch: {},
    methods: {
      async getDomainList() {
        const { vo } = await domainList('/domain/domainList')
        this.defaultWords = vo
        debugger
      },
      wordClickHandler(name, value, vm) {
        console.log('wordClickHandler', name, value, vm);
      }
    },
    created() {
      this.getDomainList()
    },
    mounted() {}
  }
</script>
