/*Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. 
Все пробелы в строке должны быть сохранены.
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */


function reverseWords(str) {
    let z = []
    ar = str.split(' ')
    console.log(ar)
    for (i = 0; i < ar.length; i++) {
        z.push(ar[i].split("").reverse().join(""))
    }
    return z.join(' ')
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))