<template>
  <section class="max-w-5xl mx-auto my-12 px-4">
    <h1 class="text-3xl lg:text-5xl font-bold text-black mb-10">Getting started</h1>
    <div class="gsap-box bg-green-600 w-24 h-24" @click="boxRotation"></div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { gsap } from 'gsap'

export default defineComponent({
  setup() {
    const boxRotation = () => {
      gsap.fromTo('.gsap-box', { rotation: 0 }, { rotation: 90, duration: 0.3 })
    }

    return { boxRotation }
  },
})
</script>
