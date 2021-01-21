
    (function ($) {
    "use strict"; 


    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });


    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });


    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });


    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    navbarCollapse();
    $(window).scroll(navbarCollapse);
})(jQuery); 


function myFunction() {
 alert("Votre demande est acceptée! Vous recevrez la confirmation de votre photoshoot dans un délai de 24heures par Email. Nous vous remercions pour votre Confiance. A la prochaine!");
}


          
         