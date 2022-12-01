<template>
  <section class="max-w-5xl mx-auto my-12 px-4">
    <h1 class="text-3xl lg:text-5xl font-bold text-black mb-10">Step 1 - basis grid</h1>

    <div class="flex flex-col md:flex-row mb-10">
      <!-- Grid -->
      <div :class="['flex shrink-0 bg-neutral-100 rounded-xl w-full aspect-square md:w-[40vw] md:h-[40vw]']">
        <div :class="['grid border-4 border-neutral-300 w-full h-full rounded-xl relative', numCol === 4 ? 'grid-cols-4 grid-rows-4' : 'grid-cols-5 grid-rows-5']">
          <div v-for="index in numCol * numCol" :key="index" class="col-auto row-auto border-4 border-neutral-300" />
        </div>
      </div>

      <!-- Notities -->
      <div class="flex shrink flex-col pt-5 md:ml-8 md:pt-0">
        <h3 class="text-xl lg:text-2xl font-normal text-app-blue--whale font-marselispro mb-4">Toevoeging</h3>
        <span class="mb-12">Basisgrid m.b.v. css grid</span>
      </div>
    </div>
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 text-center" to="/2048/step0"> Vorige</NuxtLink>
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 text-center" to="/2048/step2"> Volgende</NuxtLink>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const numCol = 4
    return { numCol }
  },
})
</script>
