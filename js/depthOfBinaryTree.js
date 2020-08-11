/**
 * 递归求二叉树的高度
 * @param tree
 * @returns {number}
 */
function depthOfBinaryTreeByRecursion(tree) {
  // 记根节点的高度为 1
  if(!tree) return 0

  return 1 + Math.max(depthOfBinaryTreeByRecursion(tree.left),depthOfBinaryTreeByRecursion(tree.right))

}


const result = depthOfBinaryTreeByRecursion({
  value:0,
  left:{
    value: 1,
    left: {
      value:3
    },
    right: {
      value:4,
      left:{
        value:7
      },
      right:{
        value:8,
        left:{
          value:9
        }
      }
    }
  },
  right:{
    value:2,
    left:{
      value:5,
      left:{
        value:6
      }
    }
  }
})

console.log(result)

