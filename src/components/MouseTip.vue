<script>
import {h, ref, onMounted, onUnmounted, Teleport} from 'vue'
export default {
  name: 'MouseTip',
  props: {
    top: {
      type: Number,
      default: 10
    },
    left: {
      type: Number,
      default: 10
    },
    
  },
  setup(props, { slots }) {
    const isVisible = ref(false)
    const el = ref(null)
    const mouseX = ref(0)
    const mouseY = ref(0)
    let $parent
    const onMouseEnter = () => {
      isVisible.value = true
    }
    const onMouseLeave = () => {
      isVisible.value = false
    }
    const onMouseMove = (evt) => {
      mouseX.value = evt.pageX + (props.top );
      mouseY.value = evt.pageY + (props.left);
    }
    onMounted(() => {
      const $el = el.value
      $parent = $el.parentElement
      $parent.addEventListener('mouseenter', onMouseEnter)
      $parent.addEventListener('mouseleave', onMouseLeave)
      $parent.addEventListener('mousemove', onMouseMove)
    })
    onUnmounted(() => {
      $parent.removeEventListener('mouseenter', onMouseEnter)
      $parent.removeEventListener('mouseleave', onMouseLeave)
      $parent.removeEventListener('mousemove', onMouseMove)
    })

    return () => {
      const children = slots.default()
      if (!children || !children.length) {
        return;
      }
      // MouseTip 组件只允许一个子元素节点
      if (process.env.NODE_ENV !== "production" && children.length > 1) {
        console.warn(
          "组件只允许一个子元素节点"
        );
      }
      // const rawProps = toRaw(props);
      let child = children[0];
      
      if(typeof child.type === 'symbol') {
        child =  h('span', { class: 'mouse-tip',}, [child])
      } 
      return h(Teleport, {
        to: 'body',
        ref: el
      }, [
        isVisible.value? h(child, {
          style: {
            position: 'absolute',
            top: mouseY.value + 'px',
            left: mouseX.value + 'px'
          }}
        ): null
      ])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mouse-tip{
  line-height:unset;
  display: inline-block;
  font-size: 13px;
  line-height: 1.5;
  max-width: 150px;
  height: auto;
  padding: 10px;
  border-radius: 3px;
  background: #FF0;
  
}
</style>
