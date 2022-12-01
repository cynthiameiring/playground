<template>
  <section class="max-w-5xl mx-auto my-12 px-4">
    <h1 class="text-3xl lg:text-5xl font-bold text-black mb-10">Step 3 - start</h1>

    <div class="flex flex-col md:flex-row mb-10">
      <!-- Grid -->
      <div :class="['border-4 border-neutral-300 flex shrink-0 bg-neutral-100 rounded-xl w-full aspect-square md:w-[40vw] md:h-[40vw]']">
        <div v-for="(numX, indexX) in gridValues.length" :key="indexX * Math.random()" class="flex flex-col w-full">
          <div v-for="(numY, indexY) in gridValues.length" :key="indexY * Math.random()" :class="['border-4 border-neutral-300', numRow === 4 ? 'h-1/4' : 'h-1/5', gridValues[numX - 1][numY - 1].value !== 0 ? 'bg-blue-400' : '']">
            {{ gridValues[numX - 1][numY - 1].value }}
          </div>
        </div>
      </div>

      <!-- Notities -->
      <div class="flex shrink flex-col justify-between md:ml-8 pt-5 md:pt-0">
        <div class="flex flex-col">
          <h3 class="text-xl lg:text-2xl font-normal text-app-blue--whale font-marselispro mb-4">Toevoeging</h3>
          <span class="mb-12">Start knop toegevoegd die random in het grid een startblokje neerzet met waarde 2. De waarde van de overige blokjes is 0. Methods startGame() en resetGame() toevoegd</span>
        </div>

        <!-- Grid size buttons -->
        <div class="flex flex-col">
          <div class="flex flex-row mb-6">
            <button class="m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 w-32" @click="setGrid(4)">Grid 4x4</button>
            <button class="m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 w-32" @click="setGrid(5)">Grid 5x5</button>
          </div>
          <button class="m-1 px-8 py-3 bg-amber-300 hover:bg-amber-400 w-32" @click="startGame()">Start!</button>
        </div>
      </div>
    </div>
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 text-center" to="/2048/step2"> Vorige</NuxtLink>
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 text-center" to="/2048/step4"> Volgende</NuxtLink>
  </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const numCol = ref(4)
    const numRow = ref(4)
    const gridValues = ref([])

    const setGrid = (num) => {
      numCol.value = num
      numRow.value = num
      resetGame()
    }

    const resetGame = () => {
      gridValues.value = []
      for (let i = 0; i < numCol.value; i++) {
        const array1 = []
        for (let j = 0; j < numRow.value; j++) {
          array1.push({ x: j, y: i, value: 0 })
        }
        gridValues.value.push(array1)
      }
    }

    const startGame = () => {
      resetGame()
      const randomXPos = Math.floor(numCol.value * Math.random())
      const randomYPos = Math.floor(numRow.value * Math.random())
      gridValues.value[randomXPos][randomYPos].value = 2
    }

    resetGame()

    return { numCol, numRow, setGrid, startGame, gridValues }
  },
})
</script>
