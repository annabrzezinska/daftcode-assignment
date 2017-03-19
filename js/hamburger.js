jQuery(function($) {
    $('.hamburger').click(function() {
        $('div#hamburger_page').toggleClass('hamburger_page')
        $('nav').toggleClass('hamburger')
        $('button.sign_up').toggleClass('responsive_sign_up')
    })
})
