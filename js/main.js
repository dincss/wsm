$(document).ready(function(){


  $('.sandwich').click(function(event) {
    $('.main_menu').toggleClass('js');
  });


  $('.select_box').click(function(event) {
  	$(this).next('.dropped').toggleClass('js');
  });
    

});











