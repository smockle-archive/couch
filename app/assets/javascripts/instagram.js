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
    }
  }
});