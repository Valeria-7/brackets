module.exports = function check(str, bracketsConfig) {
  console.log(str)

  // получить массив открывающихся скобок openBrackets ['(', '{']
  // получить объект соответствий bracketsPair [')']:'('

  let openBrackets = []  // '|'
  const bracketsPair = {} // '|':'|'
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0])
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }

  let stack = []

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i]

    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol)
    } else {
      if (stack.length == 0) {
        return false
      }

      let topElement = stack[stack.length - 1]

      if (bracketsPair[currentSymbol] == topElement) {
        stack.pop()
      } else {
        return false
      }
    }

  }
  return stack.length === 0
}

//console.log(check('||', [['|', '|']]))

/*
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
 */