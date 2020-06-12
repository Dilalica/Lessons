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

[`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) is very useful. It can get or set HTML. It will parse html including styles, classes and IDs.

```js
let content = el.innerHTML;
// assigns a string of all the contents of el to content

el.innerHTML = '<p style="color:red">Hi</p>';
// sets content to el
// HTML tags are parsed and rendered in the browser
// notice the use of double and single quotes
// to distinguish between HTML syntax and a JS string

el.innerHTML = '';
// assigning el.innerHTML an empty string
// deletes everything inside el

el.innerHTML += 'hi';
// gets previous content of element el, adds 'hi'
// and assigns the resulting content to el.innerHTML
// which reparses previous HTML content all over again
```

- [`createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [`append()`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append) vs [`appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [`prepend()`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend) vs [`insertBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
- [`remove()`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) vs [`removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

```js
let h1 = document.createElement('h1');
// creates an <h1> element Node
// and assigns it to variable h1
// note, this will not appear on

h1.append('An Important Heading');
// add text to h1
// append() is not compatible with Internet Explorer
// To add text in IE we would use .innerHTML

el.appendChild(h1);
// add the h1 element to the END of Element el,
// right BEFORE el's CLOSING tag
// appendChild() only accepts a Node

el.prepend(h1);
// add the h1 element to the BEGINNING of Element el,
// right AFTER el's OPENING tag
// prepend() NOT compatible with IE
// instead use insertBefore()
// which only accepts a Node

h1.remove();
// removes element h1 from DOM
// remove() NOT compatible with IE

h1.parentNode.removeChild(h1);
// Internet Explorer way of removing an element
```





![](https://dummyimage.com/3000x2000/ffffff/000000.jpg&text=+++++++++++CSS+&+Attributes+++++++++++)

```js
el.style.fontSize = '12px';
el.style.display = 'none';
// set CSS values as strings to CSS properties
// property names in JS in camelCase
// font-size in css becomes fontSize in JS
// this is equivalente to adding an inline style

let value = window.getComputedStyle(el)['prop-name'];
// gets an element's property's computed css value
```

In JS you may also add and remove classes and IDs that are also referenced in a CSS style.

```js
el.classList.add('class-name');
// add class

el.classList.remove('class-name');
// Remove class
```

Id's are added and removed more simply.

```js
el.id = 'id-name';
// sets element's ID to id-name

let val = el.id;
// assigns element's ID to variable val
```

- [`setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [`getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

```js
el.setAttribute('data-something', 'blah');
// creates an attribute data-something
// and assigns it a value of blah

let val = el.getAttribute('data-something-else');
// gets the value of attribute data-something-else
// and assigns it to the variable val

// getAttribute() or setAttribute() can be used
// with any documented or user created attribute names.
// Many libraries will create attributes
// that start with data- as in
// <element data-something="something"></element>
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
