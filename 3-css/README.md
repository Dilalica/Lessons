# CSS

Inline, Page, External

```html
<html>
    <head>
        <link rel="stylesheet" href="path/to/style.css">
        <style>
            p {
                color: red
            }
        </style>
    </head>
    <body>
        <p>Esto será rojo</p>
        <p style="color:black">Esto será negro</p>
    </body>
</html>
```

Selecting by:
- element name `body`
- attribute `[type="input"]`
- class name: `.some-class`
- ID `#some-id`

```css
li {
    display: inline
}
li:after {
    content: ", "
}
li:last-child:after {
    content: ""
}
```

```html
<p>This will <em>not</em> be red.</p>
<p class="red">this will be red</p>
```

```css
p{
    color: red
}
.red {
    color: white;
    background-color: red
}
em {
    transform: uppercase
}
```

```css
color
background-color
margin
border
padding
font-family
@media
```