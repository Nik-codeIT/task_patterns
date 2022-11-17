/*Заметки
В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

Все номера действительны, подтверждать их Int32не нужно.
Во входной строке всегда будет хотя бы одно число.
Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"*/

//str = arr.join(', ')

function highAndLow(numbers) {
    array = []
    arr = numbers.split(' ')
    each = arr.forEach(el => {
        array.push((ele = Number(el)))
    })
    max = Math.max(...array)
    min = Math.min(...array)
    maxx = String(max)
    minn = String(min)

    return `${maxx} ${minn}`

}


highAndLow("1 2 -3 4 5")