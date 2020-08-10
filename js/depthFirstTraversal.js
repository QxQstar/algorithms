/**
 *  深度优先遍历二叉树(通过递归：先序遍历)
 * @param tree
 * @returns {Array}
 */
function dfsByRecursion(tree) {
  const result = []
  result.push(tree.value)
  if(tree.left) {
    result.push(...dfsByRecursion(tree.left))
  }

  if(tree.right) {
    result.push(...dfsByRecursion(tree.right))
  }
  return result
}

const result = dfsByRecursion({
  value:0,
  left:{
    value: 1,
    left: {
      value:3
    },
    right: {
      value:4
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

/**
 * 深度优先遍历二叉树(通过栈：先序遍历)
 * @param tree
 * @returns {Array}
 */
function dfsByStack(tree) {
  const result = [],
    treeNodes = [];
  let curNode = tree;

  while (curNode || treeNodes.length) {
    if(curNode) {
      result.push(curNode.value)
      treeNodes.push(curNode)
      curNode = curNode.left
    } else {
      curNode = treeNodes.pop()
      curNode = curNode.right
    }
  }

  return result
}

const result2 = dfsByStack({
  value:0,
  left:{
    value: 1,
    left: {
      value:3
    },
    right: {
      value:4
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

console.log(result2)


