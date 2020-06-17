## Object Oriented Programming

Object Reference

`This`

```js
let greetingsOne = {
    francais: 'bonjour',
    espanol: 'hola',
    greet: function(str){
        console.log(this[str]);
    }
};

let greetingsTwo = greetingsOne;

greetingsTwo.francais = 'salut';

console.log(greetingsOne.francais);
// "salut"
```

```js
function Greetings(french, spanish) {
    this.francais = french;
    this.espanol = spanish;
};

Greeting.prototype.greet = function(str){
    console.log(this[str]);
}

let greetingsOne = new Greetings('bonjour', 'hola');
let greetingsTwo = new Greetings('salut', 'buenos días');

console.log(greetingsOne.francais);
// "bonjour"
console.log(greetingsTwo.francais);
// "salut"
```

```js
class Greetings{
    constructor(french, spanish){
        this.francais = french;
        this.espanol = spanish;
    }
    greet(str){
        console.log(this[str]);
    }
};

let greetingsOne = new Greetings('bonjour', 'hola');
let greetingsTwo = new Greetings('salut', 'buenos días');

console.log(greetingsOne.francais);
// "bonjour"
console.log(greetingsTwo.francais);
// "salut"
```
