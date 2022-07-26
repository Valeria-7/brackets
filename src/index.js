module.exports = function check(str, bracketsConfig) {

  // получить объект соответствий bracketsPair [')']:'('
  const bracketsPair = {} 
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }

  // создать стек
  let stack = []

  // перебрать исходную строку
  for (let i = 0; i < str.length; i++) {
    // запомнить текущий элемент и верхний в стеке
    let currentSymbol = str[i]
    let topElement = stack[stack.length - 1]

    // первый элемент записать в любом случае
    if (stack.length === 0) {
      stack.push(currentSymbol)
    } else {
      // если скобка закрывает верхнюю в стеке - удалить
      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop()
      } else {
        // если нет - добавить в стек
        stack.push(currentSymbol)
      }
    }
  }
  // Вернуть true если стек пустой - все скобки закрыты, иначе false
  return stack.length === 0
}