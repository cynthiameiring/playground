<template>
  <section class="max-w-5xl mx-auto my-12 px-4">
    <h1 class="text-3xl lg:text-5xl font-bold text-black mb-10">Step 2 - variable grid</h1>

    <div class="flex flex-col md:flex-row mb-10">
      <!-- Grid -->
      <div :class="['border-4 border-neutral-300 flex shrink-0 bg-neutral-100 rounded-xl w-full aspect-square md:w-[40vw] md:h-[40vw]']">
        <div v-for="(numX, indexX) in numCol" :key="indexX" class="flex flex-col w-full">
          <div v-for="(numY, indexY) in numRow" :key="indexY" :class="['border-4 border-neutral-300', numRow === 4 ? 'h-1/4' : 'h-1/5']" />
        </div>
      </div>

      <!-- Notities -->
      <div class="flex shrink flex-col justify-between md:ml-8 pt-5 md:pt-0">
        <div class="flex flex-col">
          <h3 class="text-xl lg:text-2xl font-normal text-app-blue--whale font-marselispro mb-4">Toevoeging</h3>
          <span class="mb-12">Knoppen toegevoegd om grid aan te kunnen passen. Heen en weer gewisseld tussen Flexbox en CSS grid. Uiteindelijk Flexbox gebruikt.</span>
        </div>

        <!-- Grid size buttons -->
        <div class="flex">
          <button class="m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 w-32" @click="setGrid(4)">Grid 4x4</button>
          <button class="m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 w-32" @click="setGrid(5)">Grid 5x5</button>
        </div>
      </div>
    </div>
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 text-center" to="/2048/step1"> Vorige</NuxtLink>
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 text-center" to="/2048/step3"> Volgende</NuxtLink>
  </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const numCol = ref(4)
    const numRow = ref(4)

    const setGrid = (num) => {
      numCol.value = num
      numRow.value = num
    }

    return { numCol, numRow, setGrid }
  },
})
</script>
