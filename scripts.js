// scripts.js

// Smooth Scrolling
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800, function() {
        window.location.hash = target;
    });
});

// Form Validation
$('form').on('submit', function(event) {
    let valid = true;
    $(this).find('input, textarea').each(function() {
        if ($(this).val() === '') {
            valid = false;
            $(this).addClass('error');
        } else {
            $(this).removeClass('error');
        }
    });
    if (!valid) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

// Image Gallery Functionality
$('.gallery img').on('click', function() {
    let src = $(this).attr('src');
    $('#lightbox img').attr('src', src);
    $('#lightbox').fadeIn();
});

$('#lightbox').on('click', function() {
    $(this).fadeOut();
});

// Interactive Animations
$(window).scroll(function() {
    $('.fade-in').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
            $(this).addClass('visible');
        }
    });
});
