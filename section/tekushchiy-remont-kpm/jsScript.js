jQuery(document).ready(function ($) {
$('#noExit').hide();
// высота внутреннего меню равна высоте контента
var contentHeight = $('.content').height();
// замена меню
$('.sidebar').animate({'margin-right' : '300'}, 500);
$('.inlandSideBarCurrentRepair').animate({'margin-left' : '0'}, 500);

// фиксировать внутреннее меню и поиск при скролинге
$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top < 0)
    $(".inlandSideBarCurrentRepair").css({
      'top': '0',
      'position': 'relative'
    });
  else 
    $(".inlandSideBarCurrentRepair").css({
      'top': '0px', 
      'position': 'fixed',
      'width':'280px',
      'height':contentHeight
  });
   });


}); //конец ready

hs.graphicsDir = 'highslide/graphics/';
hs.wrapperClassName = 'wide-border';
