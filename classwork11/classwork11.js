/*
1) Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» 
и population (населенность города, число) со значением 10 млн.
*/

var city1 = new Object();
city1.name = "ГородN";
city1.population = 10000000;

city1.getName2 = function () {
    return this.name
}

checkfunc = city1.getName2()

console.log(city1)
console.log(checkfunc)


/*
2) Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
*/

var city2 = { 
    name: "ГородМ",
    population: 1e6,
    getName : function() {
        return this.name;
    }
};


console.log(city2)
console.log(city2.getName())

/*
3) Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов

ДОПОЛНИЛ КОД ВЫШЕ

1) 
city1.getName2 = function () {
    return this.name
}
________________________________________
2)
getName : function() {
    return this.name;
}
*/

/*
4) Создайте методы exportStr() у каждого из объектов. Этот метод должен
возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. 
Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно
*/

city2.exportStr = function() {
    return (`name=${this.name}\npopulation=${this.population}\n`);
}

console.log(city2.exportStr())

/*
5) Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, 
который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
*/

function getObj() {
    return this; 
}

city1.getCity = getObj
city2.getCity = getObj
console.log("ПРОВЕРКА")
console.log(city1.getCity.getName2) //не работает, возвращает undefined. Навреное, ошибка в обращении к пустому this 

/*
6) (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». 
Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().
*/

// не успел

/*
Создайте конструктор function Card(from, to){...}, создающий объекты карточки со свойствами from, to и методом show(), 
возвращающим свойства отдельного объекта в виде строки «from,to», где на месте названий свойств будут их значения. 
Создайте переменную c1 с городами Екатеринбург и Москва
*/
var Card = {
    from:"Moscow",
    to:"SPb",
    get Show() {
        return "from:"+this.from + " " + "to:" + this.to;
    },

    set Show(value) {
        var split = value.split(' ');
        this.from = split[0];
        this.to = split[1];
    }
}
let c1="Екатеринбург Москва"
Card.Show=c1
console.log(Card.Show)

/*
Опишите класс Human: для создания объектов со свойствами name, age и height конструктор класса должен принимать одноимённые аргументы.
*/

class Human {
    #name;
    #age;
    #height;
 
    constructor(name, age, height) {
        this.#name = name;
        this.#age = age;
        this.#height = height;
    }
    getInfo() {
        return `${this.#name}, ${this.#age}, ${this.#height}`;
    }
    get firstname() {
        return this.#name;
    }
}
 
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];
for (let human of humans)
    console.log(human.getInfo());

/*
Напишите функции сортировки sortByName и sortByHeight, 
которые смогут отсортировать массив по именам (в алфавитном порядке) или росту (по убыванию роста). 
Вызовите только функцию сортировки по росту.
*/
var a = [
	{FirsName:"Ellie", LastName:"Williams"},
	{FirstName:"Lara", LastName : "Croft"}
];
function SortArray(x, y){
    if (x.LastName < y.LastName) {return -1;}
    if (x.LastName > y.LastName) {return 1;}
    return 0;
}
var s = a.sort(SortArray);

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

/*
Получите в переменную dt1 дату соответствующую 0:00, 1 января 2045 года, при помощи конструктора Date()
*/
var date = new Date(2045, 0, 1, 0, 0, 0, 0)
dt1 = date
console.log(dt1);

/*
В переменную dt2 найдите кол-во секунд, которое прошло с 1 января 1970 года по текущий момент.
*/
var now = new Date();
var dt2 = now.getTime();
console.log(dt2)

/*
Напишите функцию getDays, которая принимает год и месяц (пусть январь будет — 1, февраль — 2 и т.д.), а возвращает количество дней в месяце
*/
function getDays (month, year) { 
    return new Date(year, month, 0).getDate();
}
  
console.log(getDays(9, 2002));
console.log(getDays(9, 2020));