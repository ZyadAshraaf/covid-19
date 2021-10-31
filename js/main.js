new WOW().init();
$(document).ready(function() {
    let menuButton = $('#menuIconID');
    let closeButton = $('#closeID');
    let menu = $("#resNavId");
    let controlMenu = () => {
        menu.toggle('.none');
    }
    menuButton.click(controlMenu);
    closeButton.click(controlMenu);





    $(window).scroll(function() {


        let position = $(window).scrollTop();
        let GoToHome = $('#GoToHome');

        if (position > 150) {
            GoToHome.fadeIn();
        } else {
            GoToHome.fadeOut();
        }

        let nav = $(".navbar");
        if (position > 30) {
            nav.css("background", "white");
        } else {
            nav.css("background", "transparent");
        }


    });


});

jQuery("#responsive_headline").fitText();