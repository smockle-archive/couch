// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

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
      
      // Show all teams.
      $("#link-all").on("click", function() {
        $(".menu-link").removeClass("menu-link--active");
        $("#link-all").addClass("menu-link--active");
        $(".media").show();
      });
      
      // Show first team.
      $("#link-one").on("click", function() {
        $(".menu-link").removeClass("menu-link--active");
        $("#link-one").addClass("menu-link--active");
        $(".media").hide();
        $(".media-one").show();
      });
      
      // Show second team.
      $("#link-two").on("click", function() {
        $(".menu-link").removeClass("menu-link--active");
        $("#link-two").addClass("menu-link--active");
        $(".media").hide();
        $(".media-two").show();
      });
      
      // Show third team.
      $("#link-three").on("click", function() {
        $(".menu-link").removeClass("menu-link--active");
        $("#link-three").addClass("menu-link--active");
        $(".media").hide();
        $(".media-three").show();
      });
      
      // Show fourth team.
      $("#link-four").on("click", function() {
        $(".menu-link").removeClass("menu-link--active");
        $("#link-four").addClass("menu-link--active");
        $(".media").hide();
        $(".media-four").show();
      });
    }
  }
});