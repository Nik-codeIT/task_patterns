/*Задача
Кодирование в функции alienLanguage, функция принимает 1 параметр: str. str является предложением.

Переводим предложение на иностранный язык по следующим правилам:

Каждое слово в предложении отделяется пробелами. Последняя буква каждого слова в предложении становится строчной, а остальные буквы заглавными.
Выглядит очень странно? Потому что это форма инопланетного языка ;-)

Например:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
Небольшой совет: первое преобразование всей строки упростит код*/
// Удаление последнего символа в элементе - last = str.substr(str.length - 1, str.length)
// Верхний регистр для остальных символов в элементе - other = str.substr(0, str.length - 1).toUpperCase()
// Склейка - other + last


function alienLanguage(str) {
    str = str.toLowerCase()
    arr = str.split(' ')
    newAr = []
    for (let el of arr) {
        newAr.push((el = el.substr(0, str.length - 1).toUpperCase().slice(0, -1) + el.substr(el.length - 1, el.length)))
    }
    return newAr.join(' ')
}
console.log(alienLanguage("HELLO WORLD"))