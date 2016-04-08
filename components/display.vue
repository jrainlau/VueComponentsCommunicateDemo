<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
  </div>
</template>

<script>
import { getCount } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      // note that you're passing the function itself, and not the value 'getCount()'
      // 等同于 counterValue: state => state.count
      counterValue: getCount
    }
  }
}
</script>