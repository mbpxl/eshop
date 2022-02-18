$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__nav').toggleClass('active');
    });

    $('.nav__close').click(function (event) {
        $('.header__nav').removeClass('active');
    })
});

const details = document.getElementById('sub-filter');
details.open = true;