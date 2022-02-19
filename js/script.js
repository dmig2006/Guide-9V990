jQuery(document).ready(function ($) {

// Якоря
$(document).ready(function(){
  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 57}, 1000);
      e.preventDefault();
    });
    return false;
});
//Высота всех меню равна высоте контента
var contentHeight = $('.content').height();
$('.sidebar, .inlandSideBar, .inlandSideBarUse, .inlandSideBarMaintenance, .inlandSideBarCurrentRepair, .inlandSideBarStorage, .inlandSideBarTransportation, .inlandSideBarRecycle').css({
    'height':contentHeight
  })
 

// выпадающее главное меню
$('#inlandMenu + ul, #lastPt').hide();
$('div#inlandMenu').click(function(){
  if($(this).next().is(':visible') == false) {
    $('div#inlandMenu + ul').slideUp(800);
  }
    $(this).next().slideToggle(800);
  });

$('#inlandMenu a').click(function(){
  $('#inlandMenu a').css({
    'color':'#4E4E50'
  })
  $(this).css({
    'color':'#D1766A'
  })
  $('#inlandMenu + ul li a').css({
    'color':'#636466'
  })
})

// выпадающее внутреннее меню
$('li#mk').click(function() {
  if($(this).next().is(':visible') == false) {
    $('ul#lastPt').slideUp(800);
  }
    $(this).next().slideToggle(800);
  });


$('#inlandMenu + ul li a').click(function(){
  $('#inlandMenu a').css({
    'color':'#4E4E50'
  })
  $('#inlandMenu + ul li a').css({
    'color':'#636466'
  })
  $(this).css({
    'color':'#D1766A'
  })
});

$($('#inlandMenu + ul li a')).hover(
  function(){ $(this).addClass('clickColor') },
  function(){ $(this).removeClass('clickColor') }
);

  // кнопка вверх
$("#v_nachalo").hide();
 $(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('#v_nachalo').fadeIn();
      } 
      else {
        $('#v_nachalo').fadeOut();
      }
  });
$('#v_nachalo').click(function () {
  $('body,html').animate({
    scrollTop: 0}, 800);
    return false;
  });
});

$('div#lastPt-li').click(function(){
  if($(this).next().is(':visible') == false) {
    $('#lastPt').slideUp(800);
  }
  $(this).next().slideToggle(800);
});

// действия при клике на кнопку X
var allWidth = $('.mainBlock').width();
$('.exit').click(function() {
  $('#noExit').show();
  $('.inlandSideBar, .inlandSideBarUse, .inlandSideBarMaintenance, .inlandSideBarCurrentRepair, .inlandSideBarStorage, .inlandSideBarTransportation, .inlandSideBarRecycle').animate({
    'margin-left' : '-280px'}, 600);
  $('.content').animate({
    'width' : allWidth,
    'margin-left': '0'}, 600, function() {
    	$('.content').css({
    		'height':contentHeight
    	})
    });
});
// действия при клике на кнопку =
$('#noExit').click(function() {
  $('#noExit').hide();
  $('.inlandSideBar, .inlandSideBarUse, .inlandSideBarMaintenance, .inlandSideBarCurrentRepair, .inlandSideBarStorage, .inlandSideBarTransportation, .inlandSideBarRecycle').animate({
      'margin-left' : '0'}, 600);
  $('.content').animate({
    'width' : '78.6%',
    'margin-left': '280px'}, 600);
})

// очищаем форму при клике на форму поиска
$('#textSearch, #searchText').focus(function() {
  $(this).css({
    'border':'1.5px solid #a2d7d3',
    'box-shadow':'0 0 8px rgba(255,255,255,.6)',
    'color':'#000000',
    });
  $(this).animate({
    'width':'865px',
    'margin-left':'-605px'
  },500);
})


$('#textSearch, #searchText').blur(function() {
    if ($('#searchText').val() == 'Поиск по разделу') {
      $('.content').removeHighlight();
       $('#countFound').html('');
      $(this).css({
       'border':'solid 1px #6D3C37',
       'box-shadow':'0 0 0 rgba(0,0,0,0)',
       'color':'#BABCBE'
       });
      $(this).animate({
      'width':'260px',
      'height': '25px',
      'margin-left':'0px'
    },500);
    }
    else{
      $(this).css({
      'border':'solid 1px #6D3C37',
      'box-shadow':'0 0 0 rgba(0,0,0,0)'
      });
    }
    if ($('#searchText').val() == ''){
      $('.content').removeHighlight();
    }
})

// Плагин подсветки текста
jQuery.fn.highlight = function(pat) {
  function innerHighlight(node, pat) {
    var skip = 0;
    if (node.nodeType == 3) {
    var pos = node.data.toUpperCase().indexOf(pat);
    if (pos >= 0) {
      var spannode = document.createElement('span');
      spannode.className = 'highlight';
      var middlebit = node.splitText(pos);
      var endbit = middlebit.splitText(pat.length);
      var middleclone = middlebit.cloneNode(true);
      spannode.appendChild(middleclone);
      middlebit.parentNode.replaceChild(spannode, middlebit);
      skip = 1;
    }
    }
    else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
      for (var i = 0; i < node.childNodes.length; ++i) {
        i += innerHighlight(node.childNodes[i], pat);
      }
    }
    return skip;
  }
  return this.each(function() {
    innerHighlight(this, pat.toUpperCase());
  });
};
jQuery.fn.removeHighlight = function() {
  return this.find("span.highlight").each(function() {
    this.parentNode.firstChild.nodeName;
    with (this.parentNode) {
      replaceChild(this.firstChild, this);
      normalize();
    }
  }).end();
};
jQuery.fn.selectHighlight = function(number) {
  return this.find("span.highlight:eq("+number+")").addClass('selectHighlight').end();
};

// ПОИСК
var search_number = 0; //индекс конкретного сочетания из найденных
var search_count = 0; //количество найденных сочетаний  
var count_text = 0;
var srch_numb = 0;    
            
//search - поиск слова по нажатию на кнопку "searchButton"
function scroll_to_word(){
 var pos = $('.content .selectHighlight').position();
 jQuery.scrollTo(".selectHighlight", 500, {offset:-55});
 }

// ПОИСК ПРИ НАЖАТИИ НА #searchButton
$('#searchButton').click(function() {
 $('.content').removeHighlight();
 txt = $('#searchText').val();
 if (txt == '') return;
 $('.content').highlight(txt);
 search_count = $('.content span.highlight').size() - 1;
 count_text = search_count + 1;
 search_number = 0;
 $('.content').selectHighlight(search_number);
 if ( search_count >= 0 ) scroll_to_word();
 $('#countFound').html(1+' / '+$('.content span.highlight').size());
 });

//prev_search - выделяем предыдущие слово из найденных и скролим страничку к нему
$('#prev_search').click(function() {
 if (search_number == 0) return;
 $('.content .selectHighlight').removeClass('selectHighlight');
 search_number--;
 srch_numb = search_number + 1;
 $('.content').selectHighlight(search_number);
 if ( search_count >= 0 ) {
 scroll_to_word();
 $('#countFound').html(srch_numb+' / '+$('.content span.highlight').size());
 }
 });

//next_search - выделяем следующее слово из найденных и скролим страничку к нему
$('#next_search').click(function() {
 if (search_number == search_count) return;
 $('.content .selectHighlight').removeClass('selectHighlight');
 search_number++;
 srch_numb = search_number + 1;
 $('.content').selectHighlight(search_number);
 if ( search_count >= 0 ) {
 scroll_to_word();
 $('#countFound').html(srch_numb+' / '+$('.content span.highlight').size());
 }
  });

// ПОИСК ПРИ НАЖАТИИ НА ENTER
$('#searchText').keypress(function(event) {
  if (event.keyCode == 13) {
    $('.content').removeHighlight();
 txt = $('#searchText').val();
 if (txt == '') return;
 $('.content').highlight(txt);
 search_count = $('.content span.highlight').size() - 1;
 count_text = search_count + 1;
 search_number = 0;
 $('.content').selectHighlight(search_number);
 if ( search_count >= 0 ) scroll_to_word();
 $('#countFound').html(1+' / '+$('.content span.highlight').size());
  }
});


}); //конец ready

// скрипт для картинок


