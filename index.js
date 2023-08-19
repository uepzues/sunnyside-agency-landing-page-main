$(document).ready(function () {
  $(".menu-button").click(function () {
    const display = $(".menu-mobile-links").css("display");

    if (display == "none") {
      $(".menu-mobile-links").css("display", "flex");
    } else if (display == "flex") {
      $(".menu-mobile-links").css("display", "none");
    }
  });
});
