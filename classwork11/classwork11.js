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