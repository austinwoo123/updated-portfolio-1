// hamburger menu toggle variables
var navbarToggle = $("#nav-toggle");
var navMenu = $("#navbarBasicExample");
var toggle = 0;
// hamburger menu toggle
$("#nav-toggle").click(function () {
    if (toggle === 0) {
        navbarToggle.attr("class", "navbar-burger nav-toggle is-active");
        navMenu.attr("class", "navbar-menu is-active");
        toggle++;
    }
    else {
        navbarToggle.attr("class", "navbar-burger nav-toggle");
        navMenu.attr("class", "navbar-menu");
        toggle--;
    }
})
