$(document).foundation();

$(document).ready(function(){
	navShrink();
});

var navShrink = function(){
  $(window).scroll(function(){
      if ( $(document).scrollTop() > 50 ){
      
        $("bar").css("height", "60px");
        $("dd").css("font-size", "10px");	
      }
      else {
        $("bar").css("height", "75px");
        $("dd").css("font-size", "15px");

      }


      });
}