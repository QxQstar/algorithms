const RPN = {
  /**
   * 将表达式转成数组
   * @param expression
   * @returns {Promise<Response | undefined> | RegExpMatchArray | never}
   */
  splitExpression(expression){
    return expression.match(/\d+|[^\d\s\t]/g)
  },
  /**
   * 字符是否是操作数
   * @param char
   * @returns {boolean}
   */
  isNumber(char){
    return /^\d+$/.test(char)
  },
  /**
   * 字符是否是运算符
   * @param char
   * @returns {boolean}
   */
  isOperator(char){
    return /[\*\/\+\-#]/.test(char)
  },
  /**
   * 是否是括号
   * @param char
   * @returns {boolean}
   */
  isBracket(char){
    return /^[\(\)]$/.test(char)
  },
  /**
   * 判断表达式是否合法
   * @param expression
   * @returns {boolean}
   */
  isValidExpression(expression){
    return !/[^\d\s\t\*\+\-\/\(\)]/.test(expression)
  },
  /**
   * 操作符的优先级
   * @param operator
   * @returns {*}
   */
  priority(operator){
    return {
      '-':1,
      '+':1,
      '*':2,
      '/':2,
      '#':0
    }[operator]
  },

  operatorRule:{
    '-': function (num1,num2) {return num1 * 1 - num2 * 1},
    '+': function (num1,num2) {return num1 * 1 + num2 * 1},
    '*': function (num1, num2) {return num1 * num2},
    '/': function (num1, num2) {return num1 / num2}
  },
  /**
   * 将中缀表达式转成后缀表达式
   * @param expression
   * @returns {string}
   */
  infix2rpn(expression){
    if(!this.isValidExpression(expression)) return ''
    const rpnStack = [],
          optStack = [],
          expArr = this.splitExpression(expression +'#'),
          len = expArr.length
    for(let i = 0; i < len; i++) {
      const item = expArr[i]
      if(this.isNumber(item)) {
        rpnStack.push(item)
      } else if(this.isOperator(item)) {

        while (optStack.length) {
          const op = optStack[optStack.length - 1]
          if(op === '(') {
            break;
          } else if(this.priority(item) > this.priority(op)) {
            break
          } else {
            rpnStack.push(optStack.pop())
          }
        }

        optStack.push(item)
      } else {
        if(item === '(') {
          optStack.push(item)
        } else {
          while (optStack[optStack.length -1] !== '(') {
            rpnStack.push(optStack.pop())
          }
          optStack.pop()
        }
      }
    }


    return rpnStack.length ? rpnStack.join(' ') : ''
  },
  rpnCalculate(expression){
    if(!this.isValidExpression(expression)) return NaN
    const resultStack = [],
          expArr = this.splitExpression(expression),
          len = expArr.length

    for(let i = 0; i< len;i++){
      const item = expArr[i]
      if(this.isNumber(item)) {
        resultStack.push(item)
      } else {
        const op = this.operatorRule[item]
        const num2 = resultStack.pop()
        const num1 = resultStack.pop()
        resultStack.push(op(num1,num2))
      }
    }

    return resultStack
  },
  calculate(expression){
    return this.rpnCalculate(this.infix2rpn(expression))
  }

}


console.log(RPN.calculate('(3 + 4) * 5 - 6'))

/**
 * 使用逆波兰式可以计算表达式的结果
 */
