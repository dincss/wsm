$(document).ready(function(){


  $('.sandwich').click(function(event) {
    $('.main_menu').toggleClass('js');
  });


  $('.select_box').click(function(event) {
  	$(this).next('.dropped').toggleClass('js');
  });

  $('.dropped li').click(function(event) {
  	var val =  $(this).text();
  	$(this).parent('.dropped').prev('.select_box').children('.curr').text(val);
  	$(this).parent('.dropped').toggleClass('js');
  });

    

});











