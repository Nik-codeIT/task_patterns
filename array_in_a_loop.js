/*Функция pickIt принимает 1 параметр, arr который представляет собой массив чисел. 
Нам нужно пройти arr, используя for цикл. Если элемент представляет собой нечетное число, поместите его в odd массив,
а если это четное число, поместите его в even массив.

Я определил два массива odd и evenв функции, а также написал оператор возврата. Ваша задача — написать for цикл.
 */
array = [8, 1, 5, 4, 6, 1, 1]

function pickIt(arr) {
    let odd = [], even = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
        if (arr[i] % 2 != 0) {
            odd.push(arr[i])
        }
    }
    return [odd, even];
}

console.log(pickIt(array))