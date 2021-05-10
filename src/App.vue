<template>
  <div class="" >
    <div class="box">
      Hover Me
      <MouseTip><span class="tip">First Mousetip</span></MouseTip>
    </div>
    <div class="box">
      Hover Me
      <MouseTip ><span  class="tip">Second Mousetip</span></MouseTip>
    </div>
    <div class="box">
      Hover Me
      <MouseTip >Third Mousetip</MouseTip>
    </div>
  </div>
</template>

<script>
import MouseTip from './components/MouseTip.vue'

export default {
  name: 'App',
  data() {
    return {
      test: false
    }
  },
  components: {
    MouseTip
  },
  mounted() {
    console.log();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
   float: left;
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 50px 0 0 50px;
    background: #777;
}
.tip{
   font-size: 13px;
    line-height: normal;
    max-width: 150px;
    height: auto;
    padding: 10px;
    border-radius: 3px;
    background: #FF0;
}
</style>
