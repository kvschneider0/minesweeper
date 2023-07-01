export const getNewGame = (height: number, width: number, numBombs: number) => {
  const numTiles = height * width;
  const result = new Array(numTiles).fill(null);
  let freeIndexes = Array.from({ length: numTiles }, (_, idx) => idx)

  while (numBombs > 0) {
    const randIdx = Math.floor(Math.random() * freeIndexes.length)
    result[randIdx] = -1;
    freeIndexes = freeIndexes.filter(index => index !== randIdx);
    numBombs -= 1
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === -1) {
      continue;
    }
    const checkIndex = (index: number) => {
      if (
        0 < index && 
        index < numTiles && 
        result[index] === -1
      ) {
        result[i] += 1;
      }
    };
    // N
    checkIndex(i - width);
    // S
    checkIndex(i + width);
    // W
    checkIndex(i - 1);
    // E
    checkIndex(i + 1);
    // NE
    checkIndex(i - width + 1);
    // SE
    checkIndex(i + width + 1);
    // SW
    checkIndex(i + width - 1);
    // NW
    checkIndex(i - width - 1);
  }

  return result
};