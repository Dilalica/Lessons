![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=+++++++++JS+OPERATORS++++++++++)

Math Operators

```js
// + - / * %

10 % 2
// 0

9 % 2
// 1

9 % 3
// 3
```

Concatenation Operator

```js
// +

'Hola' + ', ' + 'cómo estás?'
// 'Hola, cómo estás?'

1 + 'hola'
// '1hola'

'hola' + 1 + 'cómo estás'
// 'hola1como estás'

1 + 1
// 2
```

Assignment Operators

```js
// =
// +=  *=  /=  -=
// ++

let num = 0;
// el valor de num es 0

num = num + 1;
// ahora el valor de num es 1

num += 1;
// ahora num es 2

num++;
// num es 3

num *= 3;
// num es 9
```

Comparison Operators

```js
// ==  !=  <  >  >=  <=
// ===

1 == 1
// true

1 == 2
// false

'hola' == 'hola'
// true

'hola' == 'adios'
// false

1 != 2
// true

1 != 1
// false

!false
// true

!true
// false

3 < 9
// true

3 < 3
// false

3 <= 3
// true

// ----------------
// type comparisons

1 === 1
// true

true == true
// true

'hello' == true
// true

'hello' === true
// false

'' == false
// true

'' == true
// false

'' === false
// false

1 == true
// true

1234 == true
// true

1 === true
// false

0 == true
// false

0 == false
// true

0 === false
// false

undefined == false
// true

!undefined
// true

// ------------------
// logical AND and OR

2 == 2 && 2 == 2
// true

2 == 2 && 2 == 1
// false

2 == 2 || 2 == 1
// true

2 == 1 || 2 == 1
// false

true || false
// true

true && false
// false
```

![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=++++++++JS+CONTROL+FLOW+++++++++)


```js
let age = 0;
let name;

if(age < 50){
    name = 'maria';
} else if(age < 30){
    name = 'jorge';
} else {
    name = 'cristina'
}
console.log(name);
// maria
```

```js
let age = 0;
while(age < 100){
    console.log(age + ' es joven');
    // '0 es joven', 1, 2, 3, ..., '99 es joven'
    age++;
}
console.log(age);
// 100
```

```js
for(let age = 0; age < 100; age++){
    console.log(age + ' es joven');
    // '0 es joven', 1, 2, 3, ..., '99 es joven'
}
console.log(age);
// undefined
```
