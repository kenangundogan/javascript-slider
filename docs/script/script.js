window.Slider=function(e){var t,n=e.element,i=e.activeItem,c=e.direction,a=document.querySelector(n),r=document.querySelector("".concat(n," .slider-wrapper")),o=document.querySelectorAll("".concat(n," .slider-item"));function d(e,t){e.items.forEach((function(n,i){null!=t&&(i+=t),e.slideIndex===i?n.classList.add("active"):n.classList.remove("active")}))}function l(e,t){e.pagination.querySelectorAll(".bullet").forEach((function(n,i){null!=t&&(i+=t),e.slideIndex===i?n.classList.add("active"):n.classList.remove("active")}))}(function(e){e.direction&&e.container.classList.add(e.direction),function(e){e.next.addEventListener("click",(function(){e.slideIndex<e.itemLength&&(function(e){"vertical"!=e.direction?e.wrapper.style.transform="translate3d(-".concat(e.containerWidth*e.slideIndex,"px,0,0)"):e.wrapper.style.transform="translate3d(0, -".concat(e.containerHeight*e.slideIndex,"px,0)")}(e),d(e),l(e),e.slideIndex++)})),e.prev.addEventListener("click",(function(){e.slideIndex>1&&(e.slideIndex--,prevIndex=1,d(e,prevIndex),l(e,prevIndex),function(e){"vertical"!=e.direction?e.wrapper.style.transform="translate3d(-".concat(e.containerWidth*(e.slideIndex-1),"px,0,0)"):e.wrapper.style.transform="translate3d(0, -".concat(e.containerHeight*(e.slideIndex-1),"px,0)")}(e))}))}(e)})(t={activeItem:i,direction:c,container:a,wrapper:r,items:o,next:document.querySelector("".concat(n," .navigation.next")),prev:document.querySelector("".concat(n," .navigation.prev")),pagination:document.querySelector("".concat(n," .pagination")),itemLength:o.length,containerWidth:a.offsetWidth,containerHeight:a.offsetHeight,slideIndex:1}),function(e){for(var t="",n=1;n<e.itemLength+1;n++)t+='<span class="bullet '.concat(e.activeItem==n?"active":"",'"></span>');e.pagination.innerHTML=t}(t)};