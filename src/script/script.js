/*!
 * Javascript Slider 1.0.0
 * Copyright 2021 Kenan Gündoğan
 * Released under the MIT License
 */

const Slider = function (options) {

    var element = options.element,
        activeItem = options.activeItem,
        direction = options.direction,
        container = document.querySelector(element),
        wrapper = document.querySelector(`${element} .slider-wrapper`),
        items = document.querySelectorAll(`${element} .slider-item`),
        next = document.querySelector(`${element} .navigation.next`),
        prev = document.querySelector(`${element} .navigation.prev`),
        pagination = document.querySelector(`${element} .pagination`),
        itemLength = items.length,
        containerWidth = container.offsetWidth,
        containerHeight = container.offsetHeight,
        slideIndex = 1;

    const selector = {
        activeItem,
        direction,
        container,
        wrapper,
        items,
        next,
        prev,
        pagination,
        itemLength,
        containerWidth,
        containerHeight,
        slideIndex
    };


    function sliderFunc(selector) {
        directionFunc(selector);
    }

    function directionFunc(selector) {
        if (selector.direction) {
            selector.container.classList.add(selector.direction);
        }
        navigationFunc(selector);
    }

    function navigationFunc(selector) {
        selector.next.addEventListener("click", () => {
            if (selector.slideIndex < selector.itemLength) {
                navigationNextFunc(selector);
                selector.slideIndex++;
            }
        });

        selector.prev.addEventListener("click", () => {
            if (selector.slideIndex > 1) {
                selector.slideIndex--;
                navigationPrevFunc(selector);
            }
        });
    }

    function navigationNextFunc(selector) {
        if (selector.direction != "vertical") {
            selector.wrapper.style.transform = 'translate3d(-' + (selector.containerWidth * selector.slideIndex) + 'px,0,0)';
        }
        else {
            selector.wrapper.style.transform = 'translate3d(0, -' + (selector.containerHeight * selector.slideIndex) + 'px,0)';
        }
    }
    function navigationPrevFunc(selector) {
        if (selector.direction != "vertical") {
            selector.wrapper.style.transform = 'translate3d(-' + (selector.containerWidth * (selector.slideIndex - 1)) + 'px,0,0)';
        }
        else {
            selector.wrapper.style.transform = 'translate3d(0, -' + (selector.containerHeight * (selector.slideIndex - 1)) + 'px,0)';
        }
    }

    sliderFunc(selector);

}