function solution(land) {
  for (let i = 1; i < land.length; i++) {
    const previousRow = land[i - 1];
    const previousMax = Math.max(...previousRow);
    const previousColumn = previousRow.indexOf(previousMax);
    const currentRow = land[i];
    for (
      let currentColumn = 0;
      currentColumn < currentRow.length;
      currentColumn++
    ) {
      if (currentColumn === previousColumn) {
        const sliced = [
          ...previousRow.slice(0, previousColumn),
          ...previousRow.slice(previousColumn + 1),
        ];
        currentRow[currentColumn] += Math.max(...sliced);
        continue;
      }
      currentRow[currentColumn] += previousMax;
    }
  }

  return Math.max(...land[land.length - 1]);
}