/* Кодирование в функции grabDoll. функция принимает 1 параметр: dolls. это массив строк, список некоторых кукол.

Вам нужно пройти dolls, используя forцикл. Если элемент «Hello Kitty» или «Кукла Барби», 
вы должны поместить его в a bag(сумка — это массив, который я определил в функции); если это другие строки,
мы должны использовать continue пропуск.

Когда bag имеет три элемента, bag он полон. Вы должны использовать break выпрыгнуть из петли; 
Если bag он не заполнен, вы должны пройти dolls до последнего элемента.

Вернуть bag после завершения цикла for.

Вы должны использовать for и break и continue своем коде. в противном случае ваше решение может не пройти этот ката.*/

function grabDoll(dolls) {
    let bag = [];

    for (i = 0; i < dolls.length; i++) {
        if (bag.length === 3)
            break;
        if (dolls[i] === "Barbie doll" || dolls[i] === "Hello Kitty") {
            bag.push(dolls[i])
        }
        if (dolls[i] != "Barbie doll" || dolls[i] != "Hello Kitty")
            continue;

    }
    return bag
}


console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white", "Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]))