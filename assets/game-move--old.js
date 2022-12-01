export function moveRight(event, gridValues, blocks) {
  event.preventDefault()

  for (let i = gridValues.value.length - 1; i > -1; i--) {
    for (let j = 0; j < gridValues.value[i].length; j++) {
      if (gridValues.value[i][j] !== 0) {
        for (let k = -1; k > -gridValues.value.length; k--) {
          if (i - k > gridValues.value.length - 1) {
            // Outside grid
            console.log('outside grid')
            break
          } else if (i - k === gridValues.value.length - 1 && gridValues.value[i - k][j] === 0) {
            // On the edge, position is free so move value/block
            console.log('move to edge')
            gridValues.value[i - k][j] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndex = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndex].xPos = i - k
            break
          } else if (k !== -1 && gridValues.value[i - k][j] !== 0 && gridValues.value[i - (k + 1)][j] !== 0) {
            // Position is taken and position before that one is also taken
            break
          } else if (k !== -1 && gridValues.value[i - k][j] !== 0 && gridValues.value[i - (k + 1)][j] === 0) {
            // Position is taken, but move because position before that one is free
            console.log('position is taken')
            gridValues.value[i - (k + 1)][j] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndexCurrentPosition = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndexCurrentPosition].xPos = i - (k + 1)
            break
          } else {
            console.log('niets gebeurd')
          }
        }
      }
    }
  }
}

export function moveLeft(event, gridValues, blocks) {
  event.preventDefault()

  for (let i = 0; i < gridValues.value.length; i++) {
    for (let j = 0; j < gridValues.value[i].length; j++) {
      if (gridValues.value[i][j] !== 0) {
        for (let k = 1; k < gridValues.value.length; k++) {
          if (i - k < 0) {
            // Outside grid
            console.log('outside grid')
            break
          } else if (i - k === 0 && gridValues.value[i - k][j] === 0) {
            // On the edge, position is free so move value/block
            console.log('move to edge')
            gridValues.value[i - k][j] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndex = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndex].xPos = i - k
            break
          } else if (k !== -1 && gridValues.value[i - k][j] !== 0 && gridValues.value[i - (k - 1)][j] !== 0) {
            // Position is taken and position before that one is also taken
            break
          } else if (k !== -1 && gridValues.value[i - k][j] !== 0 && gridValues.value[i - (k - 1)][j] === 0) {
            // Position is taken, but move because position before that one is free
            console.log('position is taken')
            gridValues.value[i - (k - 1)][j] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndexCurrentPosition = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndexCurrentPosition].xPos = i - (k - 1)
            break
          } else {
            console.log('niets gebeurd')
          }
        }
      }
    }
  }
}

export function moveDown(event, gridValues, blocks) {
  event.preventDefault()

  for (let i = 0; i < gridValues.value.length; i++) {
    for (let j = gridValues.value[i].length - 1; j > -1; j--) {
      if (gridValues.value[i][j] !== 0) {
        for (let k = -1; k > -gridValues.value.length; k--) {
          if (j - k > gridValues.value.length - 1) {
            // Outside grid
            console.log('outside grid')
            break
          } else if (j - k === gridValues.value.length - 1 && gridValues.value[i][j - k] === 0) {
            // On the edge, position is free so move value/block
            console.log('move to edge')
            gridValues.value[i][j - k] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndex = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndex].yPos = j - k
            break
          } else if (k !== -1 && gridValues.value[i][j - k] !== 0 && gridValues.value[i][j - (k + 1)] !== 0) {
            // Position is taken and position before that one is also taken
            break
          } else if (k !== -1 && gridValues.value[i][j - k] !== 0 && gridValues.value[i][j - (k + 1)] === 0) {
            // Position is taken, but move because position before that one is free
            console.log('position is taken')
            gridValues.value[i][j - (k + 1)] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndexCurrentPosition = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndexCurrentPosition].yPos = j - (k + 1)
            break
          } else {
            console.log('niets gebeurd')
          }
        }
      }
    }
  }
}

export function moveUp(event, gridValues, blocks) {
  event.preventDefault()

  for (let i = 0; i < gridValues.value.length; i++) {
    for (let j = 0; j < gridValues.value[i].length; j++) {
      if (gridValues.value[i][j] !== 0) {
        for (let k = 1; k < gridValues.value.length; k++) {
          if (j - k < 0) {
            // Outside grid
            console.log('outside grid')
            break
          } else if (j - k === 0 && gridValues.value[i][j - k] === 0) {
            // On the edge, position is free so move value/block
            console.log('move to edge')
            gridValues.value[i][j - k] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndex = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndex].yPos = j - k
            break
          } else if (k !== -1 && gridValues.value[i][j - k] !== 0 && gridValues.value[i][j - (k - 1)] !== 0) {
            // Position is taken and position before that one is also taken
            break
          } else if (k !== -1 && gridValues.value[i][j - k] !== 0 && gridValues.value[i][j - (k - 1)] === 0) {
            // Position is taken, but move because position before that one is free
            console.log('position is taken')
            gridValues.value[i][j - (k - 1)] = gridValues.value[i][j]
            gridValues.value[i][j] = 0
            const blockIndexCurrentPosition = blocks.value.findIndex((element) => element.xPos === i && element.yPos === j)
            blocks.value[blockIndexCurrentPosition].yPos = j - (k - 1)
            break
          } else {
            console.log('niets gebeurd')
          }
        }
      }
    }
  }
}
