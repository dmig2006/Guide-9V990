jQuery(document).ready(function ($) {
$('#noExit').hide();
// высота внутреннего меню равна высоте контента
var contentHeight = $('.content').height();
// замена меню
$('.sidebar').animate({'margin-right' : '500'}, 500);
$('.inlandSideBar').animate({'margin-left' : '0'}, 500);

// фиксировать внутреннее меню и поиск при скролинге
$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top < 0)
    $(".inlandSideBar").css({
      'top': '0',
      'position': 'relative'
    });
  else 
    $(".inlandSideBar").css({
      'top': '0px', 
      'position': 'fixed',
      'width':'280px',
      'height':contentHeight
  });
});

}); //конец ready