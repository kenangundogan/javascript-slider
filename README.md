# Javascript Slider
javascript slider - tiny and simple.

## Status
[![JS gzip size](https://img.badgesize.io/kenangundogan/javascript-slider/main/dist/script/script.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/kenangundogan/javascript-slider/blob/main/dist/script/script.js)
[![JS Brotli size](https://img.badgesize.io/kenangundogan/javascript-slider/main/dist/script/script.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/kenangundogan/javascript-slider/blob/main/dist/style/script.js)
[![CSS gzip size](https://img.badgesize.io/kenangundogan/javascript-slider/main/dist/style/style.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/kenangundogan/javascript-slider/blob/main/dist/style/style.css)
[![CSS Brotli size](https://img.badgesize.io/kenangundogan/javascript-slider/main/dist/style/style.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/kenangundogan/javascript-slider/blob/main/dist/style/style.css)

![Javascript Slider](https://raw.githubusercontent.com/kenangundogan/javascript-slider/main/asset/javascript-slider-cover.jpg)

## Options
Option | Type | Default | Description | Example
------ | ---- | ------- | ----------- | -----------
element | string or object | selector | id or class DOM element | [Example](https://kenangundogan.github.io/javascript-slider/javascript-slider)
direction | string | horizontal | vertical or horizontal | [Example](https://kenangundogan.github.io/javascript-slider/javascript-slider)
activeItem | int | 1 | active item to be open at startup | [Example](https://kenangundogan.github.io/javascript-slider/javascript-slider)

## Usage example
### Script
```javascript
var slider = new Slider({
    element: "#example",
    direction: "vertical",
    activeItem: 1
});
```

### View
```html
<ul class="slider-container">
    <li class="slider-wrapper">
        <div class="slider-item">
            ...
        </div>
    </li>
    ...
</ul>
```

## Copyright and license
Designed and built by [Kenan Gündoğan](https://www.linkedin.com/in/kenangundogan/)
<br>
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-slider/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
