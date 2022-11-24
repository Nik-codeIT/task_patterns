/* Задача
Кодирование в функции firstToLast, функция принимает 2 параметра: str и c. str является строкой. cявляется символом.

Пожалуйста, верните пробел между первой c и последней позицией c.

Если c в str, должно возвращаться положительное целое число; Если есть только один c в str, должен вернуть 0; 
Если нет c в str, должен вернуть -1. Поиск не должен игнорировать случай.

Например:

firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1*/


function firstToLast(str, c) {
    let firstSymbol = str.indexOf(c)
    let lastSymbol = str.lastIndexOf(c)
    return firstSymbol > -1 ? lastSymbol - firstSymbol : firstSymbol
}

// console.log("ababc".indexOf('a'))
// console.log("ababc".lastIndexOf('a'))

console.log(firstToLast("ebabdsxdxxw", "a"))


