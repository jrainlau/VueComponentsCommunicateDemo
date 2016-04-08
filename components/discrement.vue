<template>
  <div>
    <button @click='decrement'>Decrement -1</button>
  </div>
</template>

<script>
import { decrementCounter } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      decrement: decrementCounter
    }
  }
}
</script>