/* Задача
Кодирование в функции fiveLine, функция принимает 1 параметр: s. sявляется строкой.

Пожалуйста, верните строку из 5 строк (символ новой строки \n). В первой строке есть один s; Во второй строке две буквы s; и т. д. В пятой строке пять s;

Примечание 1: две стороны параметра sмогут содержать пробелы, удалите их перед использованием s.

Примечание 2. Использование строкового шаблона может облегчить вашу работу.

Пример:

fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it*/

function fiveLine(str) {
    str = str.trim()
    return `${str}\n${str.repeat(2)}\n${str.repeat(3)}\n${str.repeat(4)}\n${str.repeat(5)}`

}

console.log(fiveLine("           Ok               "))