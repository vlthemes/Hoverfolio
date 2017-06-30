# Hoverfolio
Hoverfolio is a simple jQuery plugin which allowed to make creative portfolio. Good luck!

### HTML Markup

For using Ranfolio you need to add basic HTML Markup. You just need to create `div` which contain `a` elements with `data-hoverfolio-image-src` attribute.

```html
<div class="vl-example-hoverfolio">
	<a href="#" data-hoverfolio-image-src="dist/image/1.jpg">Iarerom</a>
	<a href="#" data-hoverfolio-image-src="dist/image/2.jpg">Gan</a>
	<a href="#" data-hoverfolio-image-src="dist/image/3.jpg">Dvethane</a>
	<a href="#" data-hoverfolio-image-src="dist/image/4.jpg">Masom</a>
	<a href="#" data-hoverfolio-image-src="dist/image/5.jpg">Pokite</a>
	<a href="#" data-hoverfolio-image-src="dist/image/6.jpg">Nelofa</a>
	<a href="#" data-hoverfolio-image-src="dist/image/7.jpg">Rdeyoma</a>
	<a href="#" data-hoverfolio-image-src="dist/image/8.jpg">Qushan</a>
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
  activeIndex: 2, //Active element index
  imageMaxWidth: 55, //Maximum height of the image
  imageMaxHeight: 100, //Maximum width of the image
  randomWidth: true, //Enable random mode
  randomInterval: [16, 40], //Maximum width of the image when hovering in percent (min, max)
  debug: false //Debug mode
});
```
