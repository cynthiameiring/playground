<template>
  <section class="max-w-5xl mx-auto my-12 px-4">
    <h1 class="text-3xl lg:text-5xl font-bold text-black mb-10">Step 0 - voorbereiding</h1>
    <h2 class="text-xl lg:text-2xl font-bold text-black mb-3">Wat hebben we nodig:</h2>
    <ol class="mb-10">
      <li>Variable grid: 4x4 en 5x5</li>
      <li>Start button</li>
      <li>Responsive</li>
      <li>Puntenteller</li>
      <li>Animatie voor de bewegende blokjes</li>
    </ol>
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200" to="/2048/step1"> Volgende</NuxtLink>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
