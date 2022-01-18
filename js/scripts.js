const iceCreamFlavs = ["Peanut Butter", "cookies and Cream", "Yeti", "Moose Tracks"];

$(document).ready(function() {
  iceCreamFlavs.forEach(function(flavor) {
    $(".flavors").append("<li>" + flavor + "</li>");
    //<li> + flavor + </li>
  });
});