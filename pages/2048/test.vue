<template>
  <div>
    <button class="border-4 p-2 mb-4" @click="addItem">Add item</button>
    <transition-group tag="ul" name="company">
      <li v-for="company in list" :key="company">
        {{ company }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const testClass = ''
    const list = ref(['Test', 'Test', 'Test'])
    const addItem = () => {
      list.value.push('Test')
    }
    return { list, addItem }
  },
})
</script>

<style lang="css" scoped>
/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.company-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.company-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
}
</style>
