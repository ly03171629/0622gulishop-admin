<template>
  <div>
    <h2>我爱你赵丽颖</h2>
    <Child></Child>
  </div>
</template>

<script>
import Child from '@/views/product/sku/Child'

export default {
  name: 'Sku',
  components:{
    Child
  }
}
</script>



<style scoped>
/* 1、scoped添加上会把样式作用在本组件内部，否则会影响其它组件 */
/* 2、scoped添加上还会影响子组件的根元素 */

/* scoped加上了，想让非根标签的子组件元素有css样式 */
/* 3、>>>是原生css深度作用选择器的写法 */
/* 4、/deep/是预编译css深度作用选择器的写法 */
  div>>>h2{
    color: hotpink;
  }
</style>



