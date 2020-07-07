/**
 * 计算岛屿的数量
 * @param grid 二维数组
 * @returns {number} 岛屿的数量
 */
function numIslands(grid) {

  function isZero(grid) {
    return (!grid || !Array.isArray(grid) || grid.length === 0)
  }

  let result = 0

  if(isZero(grid)) return 0
  function infect(rowIndex,colIndex,rowLength,colLength,grid) {
    if(rowIndex < 0 || colIndex < 0 || rowIndex >= rowLength || colIndex >= colLength || grid[rowIndex][colIndex] + '' !== '1') {
      return false
    }

    grid[rowIndex][colIndex] = '2'
    infect(rowIndex,colIndex + 1,rowLength,colLength,grid)
    infect(rowIndex,colIndex -1,rowLength,colLength,grid)
    infect(rowIndex + 1,colIndex,rowLength,colLength,grid)
    infect(rowIndex - 1,colIndex,rowLength,colLength,grid)

  }
  function traversal(grid) {
    const colLength = grid[0].length,
      rowLength = grid.length;
    for(let rowIndex = 0; rowIndex < rowLength; rowIndex ++) {
      for(let colIndex = 0; colIndex < colLength; colIndex ++) {
        if(grid[rowIndex][colIndex] + '' === '1') {
          result ++
          infect(rowIndex,colIndex,rowLength,colLength,grid)
        }
      }
    }
  }

  traversal(grid)

  return result
}
