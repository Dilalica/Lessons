![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=+++++++++JS+DATA+TYPES+++++++++)

### Numbers

```js
0
1
1234
12345.6789
0.00000001
```

### Strings

```js
"Hola"
'Tod*s'
`¿Como estamos?`
```

### Booleans

```js
true
false
```

### Undefined

```js
undefined
null
NaN
```

![](https://dummyimage.com/3000x1000/ffffff/000000.jpg&text=+)

### Arrays

_An ordered list of items_

```js
[]
['hola', 'bonjour', 'hello']
[[], [], []]
```

### Objects

_A set of key value pairs_

```js
{
    spanish: 'hola',
    french: 'bonjour',
    english: 'hello'
}
{
    spanish: 'hola',
    french: 'bonjour',
    english: 'hello'
}
```

![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=++++++++++++++JSON++++++++++++++)

### _Putting it all Together_

```js
[
    {
        first: 'Fulanito',
        last: 'Perez',
        address: {
            street: 'Trafalgar',
            number: 53
        },
        children: [], // no tiene
        simpatico: true
    },
    {
        first: 'Jimena',
        last: 'Gonzalez',
        address: {
            street: 'Paseo de la Castellana',
            number: 2
        },
        children: [
            'Maria',
            'Jorge'
        ],
        simpatico: true
    },
    {
        first: 'Pepito',
        last: 'Suarez',
        address: {
            street: 'Paseo de Gracia',
            number: 1
        },
        children: [
            'Irene',
            'Clara'
        ], // no tiene
        simpatico: false // Pepito es antipatico
    }
]
// assuming above is assigned to a variable arr
// arr[2][0]
// will access Pepito's first child
```