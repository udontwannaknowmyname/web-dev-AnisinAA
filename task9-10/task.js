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

console.log("--------------------------")

/*
Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], 
а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, 
которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, 
которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.
Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.
*/

function arrayToList(arr) {
	return arr.reduceRight((rest, value) => ({value, rest}), null);
}
	
console.log(arrayToList ([1, 2, 3]))
	
function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
	array.push(node.value);
	}
	return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(value, list) {
	return {value, rest: list};
}

console.log(prepend(1, prepend(2, null)));

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3]), 1));

console.log("--------------------------")

/*
Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты, 
свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
*/

function deepEqual(a, b) {
	if (a === b)
		return true;
	if (a == null || typeof a != "object" ||
		b == null || typeof b != "object") 
		return false;
	let keysA = Object.keys(a), keysB = Object.keys(b);
	if (keysA.length != keysB.length) 
		return false;
	for (let key of keysA) {
	  	if (!keysB.includes(key) || !deepEqual(a[key], b[key])) 
			return false;
	}
	return true;
  }
  
let asobj = {here: {is: "an"}, object: 2};
console.log(deepEqual(asobj, asobj));

console.log("--------------------------")

/*
Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
*/

function flatten(arr) {
	return arr.reduce(function (flat, toFlatten) {
	  	return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
  }

console.log(flatten([[1, 2, 3], [4, 5]]));

console.log("--------------------------")

/*
Разница в возрасте матерей и их детей
Используя набор данных из примера, подсчитайте среднюю разницу в возрасте между матерями и их детьми (это возраст матери во время появления ребёнка).
Можно использовать функцию average, приведённую в главе.
*/

console.log("asd")
let ancestry = ([
	{b: 1832, d: 1905},
	{b: 1876, d: 1956},
	{b: 1683, d: 1724},
	{b: 1714, d: 1748},
	{b: 1907, d: 1997},
	{b: 1761, d: 1833},
	{b: 1535, d: 1582},
	{b: 1918, d: 2012},
	{b: 1877, d: 1968},
	{b: 1696, d: 1724},
	{b: 1602, d: 1642}]);


function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
	return byName[person.mother] != null;
}).map(function(person) {
	return person.b - byName[person.mother].b;
});
console.log(average(differences));

console.log("--------------------------")

/*
Историческая ожидаемая продолжительность жизни.
Мы считали, что только последнее поколение людей дожило до 90 лет. Давайте рассмотрим этот феномен поподробнее. 
Подсчитайте средний возраст людей для каждого из столетий. Назначаем столетию людей, беря их год смерти, 
деля его на 100 и округляя: Math.ceil(person.died / 100).
*/

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
	var groups = {};
	array.forEach(function(element) {
		var groupName = groupOf(element);
		if (groupName in groups)
		groups[groupName].push(element);
		else
		groups[groupName] = [element];
	});
	return groups;
}

var byCentury = groupBy(ancestry, function(person) {
	return Math.ceil(person.d / 100);
});

for (var century in byCentury) {
	var ages = byCentury[century].map(function(person) {
		return person.d - person.b;
	});
	console.log(century + ": " + average(ages));
}

console.log("--------------------------")

/*
Напишите функции every и some, которые работают так же, как эти методы, только принимают массив в качестве аргумента.
*/

function every(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (!predicate(array[i]))
		return false;
	}
	return true;
}

function some(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (predicate(array[i]))
		return true;
	}
	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));

console.log("--------------------------")

console.log("-конец файла-")