<template>
  <section class="max-w-5xl mx-auto my-12 px-4">
    <h1 class="text-3xl lg:text-5xl font-bold text-black mb-10">Step 12 - score</h1>

    <div class="flex flex-col md:flex-row mb-10">
      <!-- Grid -->
      <div :class="['relative border-4 border-neutral-300 flex shrink-0 bg-neutral-100 rounded-xl  w-full aspect-square md:w-[40vw] md:h-[40vw]']">
        <div v-for="(numX, indexX) in numCol" :key="indexX * Math.random()" :class="['flex flex-col w-full h-full']">
          <div v-for="(numY, indexY) in numRow" :key="indexY * Math.random()" :class="['border-4 border-neutral-300']" :style="{ height: gridItemHeight }" />
        </div>
        <transition-group name="block">
          <div
            v-for="block in blocks"
            :key="block.id"
            class="absolute"
            :class="['text-white text-4xl font-bold flex items-center justify-center border-4 border-neutral-300', determineBlockColor(block.value)]"
            :style="{
              left: determineBlockPosition(block.xPos),
              top: determineBlockPosition(block.yPos),
              width: gridItemWidth,
              height: gridItemHeight,
            }"
          >
            <!--Style ipv class gebruikt, want met Tailwind kan je geen classes dynamically creeen-->
            {{ block.value }}
          </div>
        </transition-group>
      </div>

      <!-- Notities -->
      <div class="flex shrink flex-col justify-between md:ml-8 pt-5 md:pt-0">
        <div class="flex flex-col">
          <h3 class="text-xl lg:text-2xl font-normal text-app-blue--whale font-marselispro mb-4">Toevoeging</h3>
          <span class="mb-12">De JavaScript code opgeschoond en versimpeld</span>
        </div>

        <!-- Score && Game over -->
        <div v-if="gameOver" class="text-red-600 text-5xl text-bold">Game over!</div>
        <h3 class="text-xl lg:text-2xl font-normal text-app-blue--whale font-marselispro mb-4">Score: {{ score }}</h3>

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
    <NuxtLink class="inline-block m-1 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 w-32 text-center" to="/2048/step11"> Vorige</NuxtLink>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from '@nuxtjs/composition-api'
import { moveRight, moveLeft, moveDown, moveUp } from '~/assets/game'

export default defineComponent({
  setup() {
    const numCol = ref(4)
    const numRow = ref(4)
    const gridItemHeight = ref('25%')
    const gridItemWidth = ref('25%')
    const blocks = ref([])
    let gameHasStarted = false
    const gameOver = ref(false)
    const score = ref(0)

    const setGrid = (num) => {
      numCol.value = num
      numRow.value = num
      gridItemHeight.value = (100 / numCol.value).toString() + '%'
      gridItemWidth.value = (100 / numCol.value).toString() + '%'
      resetGame()
    }

    const resetGame = () => {
      blocks.value = []
    }

    const determineBlockPosition = (position) => {
      return ((100 / numCol.value) * position).toString() + '%'
    }

    const determineBlockColor = (number) => {
      switch (number) {
        case 2:
          return 'bg-blue-400'
        case 4:
          return 'bg-red-400'
        case 8:
          return 'bg-yellow-400'
        case 16:
          return 'bg-green-400'
        case 32:
          return 'bg-pink-400'
        case 64:
          return 'bg-teal-400'
        case 128:
          return 'bg-stone-400'
      }
    }

    const addBlock = () => {
      const pickRandomPosition = () => {
        return Math.floor(numCol.value * Math.random())
      }

      let randomXPos = pickRandomPosition()
      let randomYPos = pickRandomPosition()

      do {
        randomXPos = pickRandomPosition()
        randomYPos = pickRandomPosition()
      } while (!isSpotAvailable(randomXPos, randomYPos))

      blocks.value.push({
        id: Date.now(),
        xPos: randomXPos,
        yPos: randomYPos,
        value: Math.ceil(Math.random() * 2) * 2, // Pick random the value 2 or 4 and place that in the grid on the random chosen position
      })

      // check if game is over
      if (blocks.value.length === numCol.value * numRow.value) {
        gameOver.value = true
      }
    }

    const isSpotAvailable = (xPos, yPos) => {
      return blocks.value.filter((element) => element.xPos === xPos && element.yPos === yPos).length === 0
    }

    const startGame = () => {
      resetGame()
      gameHasStarted = true
      addBlock()
    }

    const checkKey = (event) => {
      if (!gameHasStarted || gameOver.value) {
        return
      }

      event = event || window.event
      if (event.key === 'ArrowUp') {
        score.value = score.value + moveUp(event, blocks.value, numCol.value)
        setTimeout(addBlock, 200)
      } else if (event.key === 'ArrowDown') {
        score.value = score.value + moveDown(event, blocks.value, numCol.value)
        setTimeout(addBlock, 200)
      } else if (event.key === 'ArrowLeft') {
        score.value = score.value + moveLeft(event, blocks.value, numCol.value)
        setTimeout(addBlock, 200)
      } else if (event.key === 'ArrowRight') {
        score.value = score.value + moveRight(event, blocks.value, numCol.value)
        setTimeout(addBlock, 200)
      }
    }

    onMounted(() => {
      resetGame()
      window.addEventListener('keydown', checkKey)
    })

    onUnmounted(() => {
      resetGame()
      window.removeEventListener('keydown', checkKey)
    })

    return {
      numCol,
      numRow,
      gridItemHeight,
      gridItemWidth,
      blocks,
      gameOver,
      score,
      setGrid,
      startGame,
      determineBlockPosition,
      determineBlockColor,
    }
  },
})
</script>

<style lang="css" scoped>
.block-move {
  transition: all 200ms ease-in;
}
</style>
