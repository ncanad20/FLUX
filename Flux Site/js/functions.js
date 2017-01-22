/*$(document).ready(function () {

    var menu = $('#navigation');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            document.getElementById("navigation").className += "sticky";
            $('.content').addClass('menu-padding');
        } else {
            document.getElementById("MyElement").className =
   document.getElementById("MyElement").className.replace
      ( /(?:^|\s)sticky(?!\S)/g , '' )
            $('.content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;

});*/

var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

/*if($(window).scroll()){
  document.getElementById("nav").innerHTML = "<div class=\"container-fluid\">
    <div class=\"navbar-header\">
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>                        
      </button>
      <a class=\"navbar-brand\" href=\"#\">FLUX</a>
    </div>
    <div>
      <div class=\"collapse navbar-collapse\" id=\"myNavbar\" style=\"float:right\">
        <ul class=\"nav navbar-nav\">
          <li><a href=\"#section1\">BLOG</a></li>
          <li><a href=\"#section2\">PODCASTS</a></li>
          <li><a href=\"#section3\">ABOUT</a></li>
          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">CONTACT <span class=\"caret\"></span></a>
            <ul class=\"dropdown-menu\">
              <li><a href=\"#section41\">Section 4-1</a></li>
              <li><a href=\"#section42\">Section 4-2</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>";
}*/

var text = "<div class='container-fluid' style='height:5%' > <div class='navbar-header'> <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'> <span class='icon-bar'></span> <span class='icon-bar'></span><span class='icon-bar'></span> </button><a class='navbar-brand' href='#''>FLUX</a></div> <div><div class='collapse navbar-collapse' id='myNavbar' style='float:right'><ul class='nav navbar-nav'><li><a href='#section1'>BLOG</a></li><li><a href='#section2'>PODCASTS</a></li><li><a href='#section3'>ABOUT</a></li><li class='dropdown'><a class='dropdown-toggle' data-toggle='dropdown' href='#''>CONTACT <span class='caret'></span></a><ul class='dropdown-menu'><li><a href='#section41'>Section 4-1</a></li><li><a href='#section42'>Section 4-2</a></li></ul></li></ul></div></div></div>";
var text1 = "<div class='container-fluid' style='height:5%'> <div class='navbar-header'> <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'> <span class='icon-bar'></span> <span class='icon-bar'></span><span class='icon-bar'></span> </button><a class='navbar-brand' href='#''>FLUX</a></div> <div><div style='float:right; position:relative; left: -50%; '> <span style='color:#ffffff;'class='glyphicon glyphicon-chevron-down'></span></div></div>";


$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('.navbar');
  var offset = startchange.offset();
  $(document).scroll(function(){
    scroll_start = $(this).scrollTop();
    if(document.body.scrollTop == 0){
      document.getElementById("nav").innerHTML = text1;
    }else{
      document.getElementById("nav").innerHTML = text;
      //$('.navbar').css('background-color', 'transparent');
    }
  })
});

function hoverEffect(){
  document.getElementById("nav").innerHTML = text;
}

function hoverEffectOpposite(){
  if(document.body.scrollTop ==0){
    document.getElementById("nav").innerHTML = text1;
  }
}

$(document).ready(function(){
  //$("#headVid").css('height', 50+'%');
});