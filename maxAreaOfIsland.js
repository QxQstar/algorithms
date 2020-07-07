/**
 * 计算岛屿的最大面积
 * @param grid 二维数组
 * @returns {number} 最大面积
 */
function maxAreaOfIsland(grid) {
  function isZero(grid) {
    return (!grid || !Array.isArray(grid) || grid.length === 0)
  }
  if(isZero(grid)) return 0
  const allArea = []
  function isLand(rowIndex,colIndex,rowLength,colLength,grid) {
    if(rowIndex < 0 || colIndex < 0 || rowIndex >= rowLength || colIndex >= colLength || grid[rowIndex][colIndex] + '' !== '1') {
      return 0
    }
    return 1
  }
  function area(rowIndex, colIndex, rowLength, colLength, grid) {
    if(isLand(rowIndex, colIndex, rowLength, colLength, grid)) {
      grid[rowIndex][colIndex] = 0
      return 1 + area(rowIndex,colIndex + 1,rowLength,colLength,grid)+
        area(rowIndex,colIndex -1,rowLength,colLength,grid) +
        area(rowIndex + 1,colIndex,rowLength,colLength,grid) +
        area(rowIndex - 1,colIndex,rowLength,colLength,grid)
    } else {
      return 0
    }
  }
  function traversal(grid) {
    const colLength = grid[0].length,
      rowLength = grid.length;
    for(let rowIndex = 0; rowIndex < rowLength; rowIndex ++) {
      for(let colIndex = 0; colIndex < colLength; colIndex ++) {
        if(grid[rowIndex][colIndex] + '' === '1') {
          allArea.push(area(rowIndex,colIndex,rowLength,colLength,grid))
        }
      }
    }
  }

  traversal(grid)

  return Math.max(...allArea)
}
