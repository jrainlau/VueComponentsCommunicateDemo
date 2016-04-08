<template>
  <div>
    <Display></Display>
    <Increment></Increment>
    <Discrement></Discrement>
  </div>
</template>

<script>

import Display from './components/display.vue'
import Increment from './components/increment.vue'
import Discrement from './components/discrement.vue'
import store from './vuex/store'

export default {
  components: {
    Display,
    Increment,
    Discrement,
  },
  store
}
</script>
