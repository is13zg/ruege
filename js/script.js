/**
 * Created by Serg
 */
$(function () {
    $("input, textarea").placeholder();
    $(".fancybox").fancybox();
    $(".bxslider").bxSlider({
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 200,
        slideMargin: 30,
        controls: false
    });
    ymaps.ready(init);
    function init() {
        myMap = new ymaps.Map("map", {
            center: [55.790135,49.124165],
            zoom: 16
        });
		e=new ymaps.Placemark([55.790135,49.124165]);
		myMap.geoObjects.add(e),
        myMap.controls.add(
            new ymaps.control.ZoomControl()
        );
    }

    $('#nav-icon').click(function(){
        toogleNav($(this));
    });

    $('.ovl').click(function () {
        toogleNav($('#nav-icon'));
    });

    $('.dropdownPage .box').click(function () {
        $('.dropActive').removeClass('dropActive');
        $(this).addClass('dropActive');
    });

    function toogleNav(_this) {
        _this.toggleClass('open');
        _this.parent().parent().siblings('.menu').slideToggle();
        $('.ovl').toggle();
    }
});
