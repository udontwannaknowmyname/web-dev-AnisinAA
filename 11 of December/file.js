/*
use strict - дропаем поддержку IE 
*/

function User(name){
    this.name = name;
    this.isAdmin = false;

    this.sayHi = function() {
        alert("HI" + this.name);
    }
}

us1 = new User("ALEX");

class User_CL {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value
    }

    sayHi(){
        alert(this.name);
    }
    static staticMethod() {
        alert(this === User);
    }
}

let us2 = new User_CL("Jack");
console.log("us2");
console.log(us2.name);

class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}`)
    }

    stop(){
        this.speed = 0;
        alert(`${this.nemr}`)
    }
}

/*

let animal = new Animal("Кролик!");

class Rabbit{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    hid() {
        alert(`${this.name} спрятолось`)
    }
}

*/

class Rabbit extends Animal {
    hide () {
        alert(`${this.name} спрятолось`)
    }
}

function f(val){
    return class {
        sayHi() {alert(val);}
    };
}

class User_Elph extends f('Hello!') {}

new User_Elph().sayHi();

