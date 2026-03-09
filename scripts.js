// Smooth Scrolling
$('a[href*=#]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});

// Form Validation
$('form').on('submit', function(event) {
    let isValid = true;
    $(this).find('input, textarea').each(function() {
        if ($(this).val() === '') {
            isValid = false;
            $(this).addClass('error');
        } else {
            $(this).removeClass('error');
        }
    });
    if (!isValid) event.preventDefault();
});

// Image Gallery Lightbox Functionality
$('.gallery img').on('click', function() {
    const src = $(this).attr('src');
    $('body').append(`<div class='lightbox'><img src='${src}' /><div class='close'>&times;</div></div>`);
    $('.lightbox .close').on('click', function() {
        $('.lightbox').remove();
    });
});

// Scroll Animations
$(window).on('scroll', function() {
    $('.animate-on-scroll').each(function() {
        const offset = $(this).offset().top;
        const scrollPos = $(window).scrollTop() + $(window).height();
        if (scrollPos > offset) {
            $(this).addClass('animated');
        }
    });
});