// Example of blocks
// blocks: [
//   { id: 1, value: 2, xPos: 3, yPos: 1 },
//   { id: 2, value: 4, xPos: 1, yPos: 2 },
// ]

export function moveLeft(event, blocks, numCol) {
  event.preventDefault()
  let score = 0
  for (let i = 0; i < numCol; i++) {
    for (let j = 1; j < numCol; j++) {
      const blockToMove = blocks.find((element) => element.xPos === j && element.yPos === i)
      if (blockToMove) {
        let k = 1
        while (!blocks.find((element) => element.xPos === j - k && element.yPos === i) && j - k > -1) {
          k += 1
        }
        const blockOnNewPosition = blocks.find((element) => element.xPos === j - k && element.yPos === i)
        if (blockOnNewPosition && blockToMove.value === blockOnNewPosition.value) {
          blockToMove.value = blockOnNewPosition.value + blockToMove.value
          blockToMove.xPos = j - k
          const blockIndex = blocks.findIndex((block) => block.id === blockOnNewPosition.id)
          blocks.splice(blockIndex, 1) // delete block on new position
          score = score + blockToMove.value
        } else {
          blockToMove.xPos = j - k + 1 // move
        }
      }
    }
  }
  return score
}

export function moveRight(event, blocks, numCol) {
  event.preventDefault()
  let score = 0
  for (let i = 0; i < numCol; i++) {
    for (let j = numCol - 2; j > -1; j--) {
      const blockToMove = blocks.find((element) => element.xPos === j && element.yPos === i)
      if (blockToMove) {
        let k = 1
        while (!blocks.find((element) => element.xPos === j + k && element.yPos === i) && j + k < numCol) {
          k += 1
        }
        const blockOnNewPosition = blocks.find((element) => element.xPos === j + k && element.yPos === i)
        if (blockOnNewPosition && blockToMove.value === blockOnNewPosition.value) {
          blockToMove.value = blockOnNewPosition.value + blockToMove.value
          blockToMove.xPos = j + k
          const blockIndex = blocks.findIndex((block) => block.id === blockOnNewPosition.id)
          blocks.splice(blockIndex, 1) // delete block on new position
          score = score + blockToMove.value
        } else {
          blockToMove.xPos = j + k - 1 // move
        }
      }
    }
  }
  return score
}

export function moveDown(event, blocks, numCol) {
  event.preventDefault()
  let score = 0
  for (let i = 0; i < numCol; i++) {
    for (let j = numCol - 2; j > -1; j--) {
      const blockToMove = blocks.find((element) => element.yPos === j && element.xPos === i)
      if (blockToMove) {
        let k = 1
        while (!blocks.find((element) => element.yPos === j + k && element.xPos === i) && j + k < numCol) {
          k += 1
        }
        const blockOnNewPosition = blocks.find((element) => element.yPos === j + k && element.xPos === i)
        if (blockOnNewPosition && blockToMove.value === blockOnNewPosition.value) {
          blockToMove.value = blockOnNewPosition.value + blockToMove.value
          blockToMove.yPos = j + k
          const blockIndex = blocks.findIndex((block) => block.id === blockOnNewPosition.id)
          blocks.splice(blockIndex, 1) // delete block on new position
          score = score + blockToMove.value
        } else {
          blockToMove.yPos = j + k - 1 // move
        }
      }
    }
  }
  return score
}

export function moveUp(event, blocks, numCol) {
  event.preventDefault()
  let score = 0
  for (let i = 0; i < numCol; i++) {
    for (let j = 1; j < numCol; j++) {
      const blockToMove = blocks.find((element) => element.yPos === j && element.xPos === i)
      if (blockToMove) {
        let k = 1
        while (!blocks.find((element) => element.yPos === j - k && element.xPos === i) && j - k > -1) {
          k += 1
        }
        const blockOnNewPosition = blocks.find((element) => element.yPos === j - k && element.xPos === i)
        if (blockOnNewPosition && blockToMove.value === blockOnNewPosition.value) {
          blockToMove.value = blockOnNewPosition.value + blockToMove.value
          blockToMove.yPos = j - k
          const blockIndex = blocks.findIndex((block) => block.id === blockOnNewPosition.id)
          blocks.splice(blockIndex, 1) // delete block on new position
          score = score + blockToMove.value
        } else {
          blockToMove.yPos = j - k + 1 // move
        }
      }
    }
  }
  return score
}
