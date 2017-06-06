(function ($) {
    "use strict";


      jQuery(document).ready(function($){
          
          var s = skrollr.init({
              render: function(data) {
                  //Debugging - Log the current scrool position.
                  //console.log(data.curTop);
              }
          });
          
          
          $(".video_play_btn").magnificPopup({
            type: 'video',
          });
          
      });
    
    
        

    
    
    


      jQuery(window).load(function(){
          
      });




    
})(jQuery);