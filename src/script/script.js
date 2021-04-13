/*!
 * Javascript Slider 1.0.0
 * Copyright 2021 Kenan Gündoğan
 * Released under the MIT License
 */

const Slider = function (options) {

    const
        element = options.element,
        activeItem = options.activeItem,
        direction = options.direction,
        pagination = options.pagination,
        navigation = options.navigation,
        containerSlctr = document.querySelector(element),
        wrapperSlctr = document.querySelector(`${element} .slider-wrapper`),
        itemsSlctr = document.querySelectorAll(`${element} .slider-item`),
        nextSlctr = document.querySelector(`${element} .navigation.next`),
        prevSlctr = document.querySelector(`${element} .navigation.prev`),
        paginationSlctr = document.querySelector(`${element} .pagination`),
        itemLength = itemsSlctr.length,
        containerWidth = containerSlctr.offsetWidth,
        containerHeight = containerSlctr.offsetHeight,
        slideIndex = 1;

    const option = {
        element,
        activeItem,
        direction,
        pagination,
        navigation,
        containerSlctr,
        wrapperSlctr,
        itemsSlctr,
        nextSlctr,
        prevSlctr,
        paginationSlctr,
        itemLength,
        containerWidth,
        containerHeight,
        slideIndex
    };

    function paginationFunc(option) {
        if (option.pagination && option.paginationSlctr) {
            let paginationBullet = "";
            for (let i = 1; i < option.itemLength + 1; i++) {
                paginationBullet += `<span class="bullet ${option.activeItem == i ? "active" : ""}"></span>`;
            }
            option.paginationSlctr.innerHTML = paginationBullet;
        }
    }

    function directionFunc(option) {
        if (option.direction) {
            option.containerSlctr.classList.add(option.direction);
        }
        else{
            option.containerSlctr.classList.add("horizontal");
        }
        navigationFunc(option);
    }

    function navigationFunc(option) {
        option.nextSlctr.addEventListener("click", () => {
            if (option.slideIndex < option.itemLength) {
                navigationNextFunc(option);
                currentItemFunc(option);
                currentPaginationFunc(option);
                option.slideIndex++;
            }
        });

        option.prevSlctr.addEventListener("click", () => {
            if (option.slideIndex > 1) {
                option.slideIndex--;
                prevIndex = 1;
                currentItemFunc(option, prevIndex);
                currentPaginationFunc(option, prevIndex);
                navigationPrevFunc(option);
            }
        });
    }

    function navigationNextFunc(option) {
        if (option.direction != "vertical") {
            option.wrapperSlctr.style.transform = `translate3d(-${option.containerWidth * option.slideIndex}px,0,0)`;
        }
        else {
            option.wrapperSlctr.style.transform = `translate3d(0, -${option.containerHeight * option.slideIndex}px,0)`;
        }
    }
    function navigationPrevFunc(option) {
        if (option.direction != "vertical") {
            option.wrapperSlctr.style.transform = `translate3d(-${option.containerWidth * (option.slideIndex - 1)}px,0,0)`;
        }
        else {
            option.wrapperSlctr.style.transform = `translate3d(0, -${option.containerHeight * (option.slideIndex - 1)}px,0)`;
        }
    }

    function currentItemFunc(option, prevIndex) {
        option.itemsSlctr.forEach((item, key) => {
            prevIndex != null ? (key = key + prevIndex) : key;
            if (option.slideIndex === key) {
                item.classList.add("active");
            }
            else {
                item.classList.remove("active");
            }
        });
    }

    function currentPaginationFunc(option, prevIndex) {
        if (option.paginationSlctr) {
            option.paginationSlctr.querySelectorAll(".bullet").forEach((bullet, key) => {
                prevIndex != null ? (key = key + prevIndex) : key;
                if (option.slideIndex === key) {
                    bullet.classList.add("active");
                }
                else {
                    bullet.classList.remove("active");
                }
            });
        }
    }

    function sliderFunc(option) {
        directionFunc(option);
        paginationFunc(option);
    }

    sliderFunc(option);
}

window.Slider = Slider;
