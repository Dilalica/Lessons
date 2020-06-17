class Person {
    constructor(n, a){
        this.name = n;
        this.age = a;
    }
    sayName(){
        console.log(this.name);
    }
    sayAge(){
        console.log(this.age);
    }
    makeOlder(){
        this.age++;
    }
}
/*
 * // The above class notation is equivalent
 * // to writing a function and adding methods to
 * // a prototype object
 * 
 * function Person(n, a){
 *     this.name = n;
 *     this.age = a;
 * }
 * 
 * Person.prototype = {
 *     sayName: function(){
 *         console.log(this.name);
 *     },
 *     sayAge: function(){
 *         console.log(this.age);
 *     },
 *     makeOlder: function(){
 *         this.age++;
 *     }
 * };
 */

let person1 = new Person('louis', 40);
let person2 = new Person('cati', 38);


person2.makeOlder();
person2.sayAge();
person2.age = 20;
person2.sayAge();





