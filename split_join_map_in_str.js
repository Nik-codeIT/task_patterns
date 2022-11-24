/*Задача
Реализуйте функцию, которая принимает 2 аргумента: string и separator.

Ожидаемый алгоритм: разбить string на слова по пробелам, разбить каждое слово на отдельные символы и
соединить их обратно с заданным separator,
соединить все получившиеся «слова» обратно в предложение с пробелами.

Например:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!" */


function splitAndMerge(string, separator) {
    return string
        .split(" ")
        .map((symbol) => symbol.split("").join(separator))
        .join(" ");

}

console.log(splitAndMerge("My name is John", "-"))
