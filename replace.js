/*Создайте функцию, которая переводит заданную строку ДНК в РНК.
Например:
"GCAT"  =>  "GCAU"
Входная строка может быть произвольной длины, в частности, она может быть пустой. 
Гарантируется, что все входные данные верны, т. е. каждая входная строка будет состоять только из 'G', 'C', 'A'и/или 'T'.*/
function DnaToRna(dna) {
    return dna.replace(/T/g, 'U');
}

console.log(DnaToRna('GCAT'))