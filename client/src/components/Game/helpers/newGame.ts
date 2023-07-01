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
  result[0] = -1;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === -1) {
      continue;
    }
    const countIfBomb = (index: number) => {
      if (
        0 <= index && 
        index < numTiles && 
        result[index] === -1
      ) {
        result[i] += 1;
      }
    };
    const isLeftEdge = i % width === 0;
    const isRightEdge = i % width === width - 1;
    // N
    countIfBomb(i - width);
    // S
    countIfBomb(i + width);
    // W
    if (!isLeftEdge) countIfBomb(i - 1);
    // E
    if (!isRightEdge) countIfBomb(i + 1);
    // NE
    if (!isRightEdge) countIfBomb(i - width + 1);
    // SE
    if (!isRightEdge) countIfBomb(i + width + 1);
    // SW
    if (!isLeftEdge) countIfBomb(i + width - 1);
    // NW
    if (!isLeftEdge) countIfBomb(i - width - 1);
  }

  return result
};