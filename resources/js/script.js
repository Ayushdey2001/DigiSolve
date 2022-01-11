$(document).ready(function () {
    $(".about-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky-nav");
        } else {
            $("nav").removeClass("sticky-nav");
        }
    });
});

$(document).ready(function () {
    $(".js--about-section").waypoint(
        function (direction) {
            $(".js--about-section").addClass("animate__animated animate__fadeIn");
        },
        { offset: "50%" }
    );
});

$(document).ready(function () {
    $(".js--services-section").waypoint(
        function (direction) {
            $(".js--service-box").addClass("animate__animated animate__zoomIn");
        },
        { offset: "50%" }
    );
});

$(document).ready(function () {
    $(".js--packages-section").waypoint(function (direction) {
        $(".js--enterprise").addClass("animate__animated animate__pulse");
    });
});

$(document).ready(function () {
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    event.preventDefault();
                    $("html, body").animate({ scrollTop: target.offset().top }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr("tabindex", "-1");
                            $target.focus();
                        }
                    });
                }
            }
        });
});
