# vue3-mouse-tip

预览地址：https://ciming.github.io/vue3-mouse-tip/
## 安装
npm
```
npm install --save vue3-mouse-tip
```
yarn

```
yarn add vue3-mouse-tip
```

## 使用

```javascript
<template>
  <div class="" >
    <div class="box">
      Hover Me
      <!-- 自定义样式 -->
      <MouseTip>
        <span class="tip">First Mousetip</span>
      </MouseTip>
    </div>
    
    <div class="box">
      Hover Me
      <!-- 默认样式 -->
      <MouseTip :top="5" :left="5">
        Third Mousetip
      </MouseTip>
    </div>
    {{test}}
  </div>
</template>

<script>
import MouseTip from './components/MouseTip/MouseTip.vue'

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
}
</script>

<style>
.tip{
   font-size: 12px;
    line-height: normal;
    max-width: 150px;
    height: auto;
    padding: 10px;
    color: #fff;
    border-radius: 3px;
    background: #000;
}
</style>


```