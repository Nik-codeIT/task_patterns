/* Задача
Кодирование в функции cutIt, функция принимает 1 параметр: arr. arr представляет собой массив строк.

Первая миссия: Обходя arr, найдите кратчайшую длину строки.

Вторая миссия: arr снова пройтись, перехватить все строки до кратчайшей длины строки (начать с index0). 
вы можете использовать один из slice() substring() или substr() сделать это. вернуть результат после завершения работы.

Например:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]*/

function cutIt(arr) {
    newMas = []
    ele = arr.map(item => item.length)
    minim = Math.min(...ele)
    second = arr.map(el => el.slice(0, minim))
    return second
}


console.log(cutIt(["codewars", "javascript", "java"]))
