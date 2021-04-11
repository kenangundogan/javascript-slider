/*!
 * Javascript Slider 1.0.0
 * Copyright 2021 Kenan Gündoğan
 * Released under the MIT License
 */

const Slider = function (options) {

    var element = options.element,
        activeItem = options.activeItem,
        container = document.querySelector(element),
        wrapper = document.querySelector(`${element} .slider-wrapper`),
        items = document.querySelectorAll(`${element} .slider-item`),
        next = document.querySelector(`${element} .navigation.next`),
        prev = document.querySelector(`${element} .navigation.prev`),
        pagination = document.querySelector(`${element} .pagination`),
        itemLength = items.length,
        containerWidth = container.offsetWidth,
        slideIndex = 1;

    const selector = {
        activeItem,
        container,
        wrapper,
        items,
        next,
        prev,
        pagination,
        itemLength,
        containerWidth,
        slideIndex
    };


    function sliderFunc(selector) {
        navigationFunc(selector);
    }

    function navigationFunc(selector) {
        selector.next.addEventListener("click", () => {
            if (selector.slideIndex < selector.itemLength) {
                selector.wrapper.style.transform = 'translate3d(-' + (selector.containerWidth * selector.slideIndex) + 'px,0,0)';
                selector.slideIndex++;
            }
        });

        selector.prev.addEventListener("click", () => {
            if (selector.slideIndex > 1) {
                selector.slideIndex--;
                selector.wrapper.style.transform = 'translate3d(-' + (selector.containerWidth * (selector.slideIndex - 1)) + 'px,0,0)';
            }
        });
    }


    sliderFunc(selector);

}
