![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=++++++++++++The+DOM++++++++++++)

```js
window
// browser's global variable

document
// the DOM
```



![](https://dummyimage.com/3000x1000/ffffff/000000.jpg&text=+)

### Accessing an Element

- [`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) 
- [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) 
- [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

```js
document.body
// the page's body element

let el = document.getElementById('some-id');
// returns a Node

let els = document.querySelectorAll('.any-class');
// returns an array-like NodeList
// cycle through them with a for loop
for(let i=0; i<els.length; i++){
    let el = els[i];
}
// NodeLists support .forEach() method

// other methods include
// document.getElementsByTagName('p');
// document.getElementsByClassName('any-class');
// both return live HTMLCollections
// which do NOT support .forEach()
```

_[Read](https://medium.com/@layne_celeste/htmlcollection-vs-nodelist-4b83e3a4fb4b) about the subtle differences between NodeLists and HTMLCollections_



![](https://dummyimage.com/3000x1000/ffffff/000000.jpg&text=+)

### Adding and Deleting Content

```js
let h1 = document.createElement('h1');
// creates an <h1> element Node
// and assigns it to variable h1
// note, this will not appear on

h1.innerHTML = 'An Important Heading';
// add text to h1

el.appendChild(h1);
// add the h1 element to the end of Element el,
// right before el's closing tag

el.parentNode.removeChild(h1);
// removes element el from DOM
```

[`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) is very useful. It can get or set HTML. We can do much of the above with just .innerHTML

```js
let content = el.innerHTML;
// assigns a string of all the contents of el to content

el.innerHTML = '<p>Hi</p>';
// sets content to el
// HTML tags are parsed and rendered in the browser

el.innerHTML = '';
// assigning el.innerHTML an empty string
// deletes everything inside el

el.innerHTML += 'hi';
// gets previous content of, add 'hi'
// and assigns the resulting content
```



![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=+++++++++++CSS+in+JS+++++++++++)

```js
el.classList.add('class-name');
// add class

el.classList.remove('class-name');
// Remove class

el.style.fontSize = '12px';
el.style.display = 'none';
// set CSS values as strings to CSS properties
// property names in JS in camelCase
// font-size in css becomes fontSize in JS

window.getComputedStyle(el)['prop-name'];
// gets an element's property's computed css value
```



![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=+++++++++++++Events+++++++++++++)

[`Event callback`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) takes two arguments the first, a string, describes the type of event. See a complete list of available events [here](https://developer.mozilla.org/en-US/docs/Web/Events). The second is a callback that places a handy event object as a parameter.

```js
// attache an event to el
el.addEventListener('click', event => {
    console.log(event);
    // event.target references the clicked Element
    // event.clientX and event.clientY get click x, y location
});
```



![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=+++++++++++++Forms+++++++++++++)

```js
let val = el.value;
// GETS value of input element el
// and assigns it to variable val

el.value = 'some value';
// SETS input element el 'some value'
```

```js
let form document.querySelector('form');
// assumes only one form element in DOM
form.addEventListener('submit', event => {
    event.preventDefault();
    // this is necessary to prevent browser from
    // sending a POST request and refreshing the page
    // which is default behaviour when submitting a form
});
// submit event riggered if user clicks on input[type=submit]
// or by hitting return in single field
```
