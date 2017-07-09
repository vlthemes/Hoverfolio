# Hoverfolio
Hoverfolio is a simple jQuery plugin which allowed to make creative portfolio. Good luck!

### HTML Markup

For using Ranfolio you need to add basic HTML Markup. You just need to create `div` which contain `a` elements with `data-image` attribute.

```html
<div class="vl-example-hoverfolio">
  <a href="#" class="vl-link" data-image="images/1.jpg"></a>
  <a href="#" class="vl-link" data-image="images/2.jpg"></a>
  <a href="#" class="vl-link" data-image="images/3.jpg"></a>
  <a href="#" class="vl-link" data-image="images/4.jpg"></a>
  <a href="#" class="vl-link" data-image="images/5.jpg"></a>
  <a href="#" class="vl-link" data-image="images/6.jpg"></a>
  <a href="#" class="vl-link" data-image="images/7.jpg"></a>
  <a href="#" class="vl-link" data-image="images/8.jpg"></a>
</div>
```

### Call Hoverfolio Plugin

To call Hoverfolio plugin you need to call `hoverfolio()` method in .js file, to your element with menu HTML Markup. Like this:

```javascript
$(document).ready(function(){
  $(".vl-example-hoverfolio").hoverfolio();
});
```

### Methods
You can use Ranfolio with methods. If you just call `hoverfolio()` it initiate portfolio on your HTML Markup. You can call `hoverfolio("destroy")` to clear your html from Hoverfolio classes and delete functionality.

### Options
To customise your Hoverfolio you can call it with options:

```javascript
$(".vl-example-hoverfolio").hoverfolio({
  activeIndex: 4, //Active element index
  imageMaxWidth: 55, //Maximum height of the image
  imageMaxHeight: 100, //Maximum width of the image
  randomWidth: true, //Enable random mode
  randomInterval: [16, 40] //Maximum width of the image when hovering in percent (min, max)
});
```
