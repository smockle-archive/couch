// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Using the Garber-Irish method:
// http://viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution

COUCH = $.extend(typeof COUCH === "undefined" ? {} : COUCH, 
{
  common: {
    init: function() {
    }
  }
});
 
UTIL = {
  exec: function(controller, action) {
    var ns = COUCH,
        action = (action === undefined) ? "init" : action;
 
    if (controller !== "" && ns[controller] && typeof ns[controller][action] == "function") {
      ns[controller][action]();
    }
  },
 
  init: function() {
    var body = document.body,
        controller = body.getAttribute("data-controller"),
        action = body.getAttribute("data-action");
 
    UTIL.exec("common");
    UTIL.exec(controller);
    UTIL.exec(controller, action);
  }
};
 
$(document).ready(UTIL.init);
