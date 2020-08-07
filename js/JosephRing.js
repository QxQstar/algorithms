/**
 * 约瑟夫环
 * @param total 环上的节点数
 * @param interval 节点间隔
 * @param remain 剩余个数
 * @returns {Array}
 */
function josephRing(total,interval,remain=1){
  const nodes = []
  let i = 1

  while (i <= total) {
    nodes.push({
      value:i,
      status:1
    })
    i++
  }
  function getActiveNodes() {
    return nodes.filter(node => node.status === 1)
  }
  let step = 0
  while (getActiveNodes().length > remain) {

    for(let i = 0; i < nodes.length; i++) {
      if(nodes[i].status === 1) {
        step ++
      }

      if(step % interval === 0) {
        nodes[i].status = 0
      }
    }
  }


  return nodes
}

console.log(josephRing(30,9))
