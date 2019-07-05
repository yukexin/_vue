<style lang="less" scoped>
  @import "../assets/index";
</style>

<template>
  <div id="contain">
    <word-cloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler" />
  </div>
</template>

<script>
  import wordCloud from 'vue-wordcloud'

  export default {
    name: "domain",
    data() {
      return {
        myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
        defaultWords: [
          {
            "name": "Alidaxia",
            "value": 26
          },
          {
            "name": "xinwenti",
            "value": 19
          },
          {
            "name": "maipiaopiao",
            "value": 18
          },
          {
            "name": "dutalk",
            "value": 16
          },
          {
            "name": "lvmang",
            "value": 15
          },
          {
            "name": "keeppet",
            "value": 9
          }
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
      wordClickHandler(name, value, vm) {
        console.log('wordClickHandler', name, value, vm);
      }
    },
    onLoad(options) {

    },
    created() {
      debugger

    },
    mounted() {
    }
  }
</script>
