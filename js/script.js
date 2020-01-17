$(".mobile-btn") .on("click", function () {
    $(".mobile-btn") .toggleClass("show")
    $(".menu") .toggleClass("show-menu")
})
$(".menu-list-item a") .on("click", function () {
    $(".menu") .removeClass("show-menu")
    $(".mobile-btn") .removeClass("show")
})

$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
        items: 1,
        nav:true,
        // dots: true,
        loop: true,
        navText: ["<img src='./image/Left-Arrow.png'>", "<img src='./image/Right-Arrow.png'>"],
        animateOut: "bounceOutLeft",
        animateIn: "bounceInRight"
    });



$(document).ready(function() {
    $(".quote-slider").owlCarousel({
        items: 1,
        nav:true,
        dots: false,
        loop: true,
        navText: ["<img src=./image/Arrow-left.png>", "<img src=./image/Arrow-Right.png>"],
        animateOut: "slideOutRight",
        animateIn: "slideInLeft"
    });
});

var wow = new WOW(
    {
        boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
        animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
        offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
        mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
        live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
        scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
);
wow.init();


$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = 620;
        if($(window).scrollTop() >= scrollTop ){
            $('nav').css({
                position : 'fixed',
                top : '0'
            });
        }
        if($(window).scrollTop() <= scrollTop ){
            $('nav').removeAttr('style');
        }
    })
});

var delay_popup = 3000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
