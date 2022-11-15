// Функция которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

function summation(num) {
    count = 1
    result = 0
    while (count < num) {
        result += count;
        count++;
    }
    return result
}

console.log(summation(7))