//Треугольник
let lattice = "#"
let lattice1 = "#"

for(let i=0;i<7;i++){
    console.log(`${lattice}`);
    lattice += lattice1
}

console.log("--------------------------")

//FizzBuzz
for(let i=1;i<101;i++){
    if (i%3==0){
        console.log("Fizz");
    }
    else if ((i%5)==0) {
        if ((i%3) != 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    else {
        console.log(i);
    }
}

console.log("----------")

//FizzBuzz2
for(let i=1;i<101;i++){
    if ((i % 3 == 0)&&(i % 5 == 0)) {
        console.log("FizzBuzz");
    }
    else if ((i % 3) == 0){
        console.log("Fizz")
    }
    else if ((i % 5 == 0)&&(i % 3 != 0)){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

/*
Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, 
в которой линии разделяются символами новой строки. На каждой позиции либо пробел, 
либо #. В результате должна получиться шахматная доска
*/

for(let i=0;i<8;i++){
    if (i % 2 == 0){
        console.log("# # # #")
    }
    else {
        console.log(" # # # #")
    }
}

console.log("--------------------------")

//Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function min(let1, let2){
    if (let1 < let2) {
        return let1
    }
    else {
        return let2
    }
}

console.log(min(10, 20))

console.log("--------------------------")

/*
Считаем бобы.

Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом 
с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). 
У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. 
Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.

Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ,
который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.
*/

function countBsFirst(string) {
    return (string.split("B").length-1);
}
console.log(countBsFirst("ABBBAC"));


function countChar(string, key) {
    return (string.split(key).length - 1);
}
console.log(countChar("Moscow", "o"));

console.log("--------------------------")

/*
Сумма диапазона. 

Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, 
который содержит все числа из него, включая начальное и конечное.

Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 

Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.

В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. 
Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. 
Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

function range(start, end){
    let array = [];
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
    return array
}

console.log(range(1, 10))

*/

function range(start, stop) {
    let arrayF = [];
    for (var i = start; i <= stop; i++) {
      arrayF.push(i);
    }
    return arrayF;
}

console.log(range(1, 10))
console.log("-------")

let tasksix = range(1, 10)

console.log(tasksix);
function sum(arrayS) {
    ans = 0;
    for (i in arrayS) {
      ans += num(i);
    }
    return ans;
}
console.log(sum(tasksix));

console.log("--------------------------")
/*
Обращаем массив вспять. 
Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. 
Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента.
*/

function reverseArray(array) {
    let arraySecond = [];
    for(var i = array.length - 1; i >= 0; i--) {
        arraySecond.push(array[i]);
    }
    return arraySecond;
}
console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(array) {
    for(let i = 0, j = array.length-1; i < j; i++, j--)
        [array[i], array[j]] = [array[j], array[i]];
    return array;
}
console.log(reverseArrayInPlace([1, 2, 3]));

console.log("-конец файла-")