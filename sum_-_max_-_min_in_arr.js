/*Суммируйте все числа заданного массива, кроме самого высокого и самого 
низкого элемента (по значению, а не по индексу!).

Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, 
даже если их несколько с одинаковым значением.*/

let array = [-25, 1, 5, 10, 34, 100];


function sumArray(arr) {

    if (arr == null || arr.length <= 2) {
        return 0
    }

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    var summa = 0

    for (i = 0; i < arr.length; i++) {
        summa += arr[i];
    }

    return summa - max - min
}

console.log(sumArray(array))