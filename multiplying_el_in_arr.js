/*Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. Пример:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

array = [1, 2, 3, 4]

function growing(arr) {
    result = 1
    for (i = 0; i < arr.length; i++) {
        result *= arr[i]
    }
    return result
}

console.log(growing(array))