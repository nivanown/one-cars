/*- phone-input -*/
var swiper = new Swiper(".photo-slider", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: ".photo-slider .swiper-button-next",
        prevEl: ".photo-slider .swiper-button-prev",
    },
});

/*- models -*/
var sliderThumbs = new Swiper(".models__nav", {
    direction: "vertical",
    spaceBetween: 8,
    slidesPerView: 8,
    freeMode: true,
    mousewheel: true,
    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        768: {
            direction: 'vertical',
        }
    }
});
var sliderImages = new Swiper(".models__content", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    thumbs: {
        swiper: sliderThumbs,
    },
});

/*- step -*/
$('.step_1 .image-type__item').click(function(e) {
    $('.step_1').removeClass('show');
    $('.step_2').addClass('show');
});

$('.step_2 .image-type__item').click(function(e) {
    $('.step_2').removeClass('show');
    $('.step_3').addClass('show');
});

$('.step_3 .image-type__item').click(function(e) {
    $('.step_3').removeClass('show');
    $('.step_4').addClass('show');
});

$('.step_4 .image-type__item').click(function(e) {
    $('.step_4').removeClass('show');
    $('.step_5').addClass('show');
});

$('.step_5 .text-type__item').click(function(e) {
    $('.step_5').removeClass('show');
    $('.step_6').addClass('show');
});

$('.step_6 .text-type__item').click(function(e) {
    $('.step_6').removeClass('show');
    $('.step_7').addClass('show');
});

$('.step_7 .text-type__item').click(function(e) {
    $('.step_7').removeClass('show');
    $('.step_8').addClass('show');
});

/*- notification -*/
$('.step .btn').click(function(e) {
    $('.notification').addClass('show');
});

$(document).on('mouseup', function(e){
    let s = $('.notification.show');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
        s.removeClass('show');
    }
});

/*- popular-cars -*/
$('.popular-cars__btn').click(function(e) {
    $('.catalog__item').removeClass('hidden');
    $('.popular-cars__btn').addClass('hidden');
});

/*- phone-input -*/
[].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            newValue = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            newValue = newValue.slice(0, i);
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
});

/*- modal -*/
const myModal = new HystModal({
    closeOnEsc: true,
    backscroll: true,
    afterClose: function(modal){
        let videoframe = modal.openedWindow.querySelector('iframe');
        if(videoframe){
            videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    },        
});

/*- Карта YANDEX-map -*/
if (document.getElementById('map')) {
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.743280456145065,37.67460756350706],
        zoom: 17,
        controls: [],
    }, {
        suppressMapOpenBlock: true
    }),
    destinations = {
        'Офис': [55.74317756897417,37.672611999999994]
    },
    myPlacemark = new ymaps.Placemark(destinations['Офис'], {
        hintContent: 'Вековая улица, 10с2',
        balloonContent: 'г. Москва, Вековая улица, 10с2'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/bg/map.svg',
        // Размеры метки.
        iconImageSize: [60, 68],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-10, -80]
    })
    myMap.geoObjects
        .add(myPlacemark)
    myMap.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        myMap.behaviors.disable('drag');
    }
  });
}

/*- Карта YANDEX-map -*/
if (document.getElementById('map-2')) {
    ymaps.ready(function () {
    var myMap2 = new ymaps.Map('map-2', {
        center: [55.74317756897417,37.672611999999994],
        zoom: 17,
        controls: [],
    }, {
        suppressMapOpenBlock: true
    }),
    destinations = {
        'Офис': [55.74317756897417,37.672611999999994]
    },
    myPlacemark2 = new ymaps.Placemark(destinations['Офис'], {
        hintContent: 'Вековая улица, 10с2',
        balloonContent: 'г. Москва, Вековая улица, 10с2'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/bg/map.svg',
        // Размеры метки.
        iconImageSize: [60, 68],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-10, -80]
    })
    myMap2.geoObjects
        .add(myPlacemark2)
    myMap2.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        myMap2.behaviors.disable('drag');
    }
  });
} 