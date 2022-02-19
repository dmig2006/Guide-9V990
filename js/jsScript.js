jQuery(document).ready(function ($) {
$('#noExit, #secondSearch, #perechenSokr').hide();

  $('.sidebar').animate({'margin-left' : '0'}, 400);
  $('.inlandSideBar').show().css({'margin-left':'0'}).animate({'margin-left' : '-300px'}, 400);

	var contentHeight = $('.content').height();
  	$('.sidebar').css({
    'height':contentHeight
  })

  	$('#perSokr').click(function() {
  		$('#delete').fadeOut(300, function() {
  			$('#perechenSokr').fadeIn(300);
  		});
  	})
  	$('#exitPerSokr').click(function() {
  		$('#perechenSokr').fadeOut(300, function() {
  			$('#delete').fadeIn(300);
  		});
  	})
}); //конец ready

hs.graphicsDir = 'highslide/graphics/';
  hs.wrapperClassName = 'wide-border';
