jQuery(document).ready(function ($) {
$('#noExit, #mainSearch').hide();
// высота внутреннего меню равна высоте контента
var contentHeight = $('.content').height();
// замена меню
$('.sidebar').animate({'margin-right' : '300'}, 500);
$('.inlandSideBarMaintenance').animate({'margin-left' : '0'}, 500);

// фиксировать внутреннее меню и поиск при скролинге
$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top < 0)
    $(".inlandSideBarMaintenance").css({
      top: '0',
      position: 'relative'
    });
  else 
    $(".inlandSideBarMaintenance").css({
      top: '0px', 
      position: 'fixed',
      'width':'280px',
      'height':contentHeight
  });

   });


}); //конец ready
