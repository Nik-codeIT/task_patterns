// Задача
// Кодирование в функции colorOf.функция принимает 3 параметра: r g b.
// Это означает значение цвета красного, зеленого и синего.диапазон значений 0 - 255.

// Используйте toString(16)Преобразование чисел rgb в шестнадцатеричную форму строки.наконец,
// объедините их в цветовой веб - код и верните его.

// код цвета должен начинаться с «#». а затем используйте 2 символа на цвет.

//     Например:

// colorOf(255, 0, 0) should return "#ff0000"
// colorOf(0, 111, 0) should return "#006f00"
// colorOf(1, 2, 3) should return "#010203"

function colorOf(r, g, b) {
    let red = Number(r).toString(16)
    let green = Number(g).toString(16)
    let blue = Number(b).toString(16)
    if (red.length < 2)
        red = "0" + red;
    if (green.length < 2)
        green = "0" + green;
    if (blue.length < 2)
        blue = "0" + blue;

    return `#${red}${green}${blue}`
}


console.log(colorOf(1, 2, 3))