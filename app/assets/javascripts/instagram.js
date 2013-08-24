// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function linkAll() {
  $(".menu-link").removeClass("menu-link--active");
  $("#link-all").addClass("menu-link--active");
  $(".media").show();
}

function linkOne() {
  $(".menu-link").removeClass("menu-link--active");
  $("#link-one").addClass("menu-link--active");
  $(".media").hide();
  $(".media-one").show();
}

function linkTwo() {
  $(".menu-link").removeClass("menu-link--active");
  $("#link-two").addClass("menu-link--active");
  $(".media").hide();
  $(".media-two").show();
}

function linkThree() {
  $(".menu-link").removeClass("menu-link--active");
  $("#link-three").addClass("menu-link--active");
  $(".media").hide();
  $(".media-three").show();
}

function linkFour() {
  $(".menu-link").removeClass("menu-link--active");
  $("#link-four").addClass("menu-link--active");
  $(".media").hide();
  $(".media-four").show();
}

COUCH = $.extend(typeof COUCH === "undefined" ? {} : COUCH, {
  instagram: {
    index: function() {
      // Load feeds.
      $.ajax({
        url: "/instagram/feed",
        success: function(data) {
          $("section#feeds").html(data);
        }
      });
      
      // Reload feeds every thirty seconds.
      setInterval(function() {
        $.ajax({
          url: "/instagram/feed",
          success: function(data) {
            console.log("Loaded images.");
            $("section#feeds").html(data);
            if ($("#link-all").hasClass("menu-link--active")) linkAll();
            else if ($("#link-one").hasClass("menu-link--active")) linkOne();
            else if ($("#link-two").hasClass("menu-link--active")) linkTwo();
            else if ($("#link-three").hasClass("menu-link--active")) linkThree();
            else if ($("#link-four").hasClass("menu-link--active")) linkFour();
          }
        });
      }, 45000);
      
      $("#link-all").on("click", linkAll);
      $("#link-one").on("click", linkOne);
      $("#link-two").on("click", linkTwo);
      $("#link-three").on("click", linkThree);
      $("#link-four").on("click", linkFour);
    }
  }
});