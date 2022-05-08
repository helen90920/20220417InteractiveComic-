window.onscroll = rolling_h;

function rolling_h() {
  if ($(document).scrollLeft() < 1000) {
    $("#effect").hide();
    $("#ahah").show();
    $("#ahah").css("top", (-$(document).scrollLeft())+"px");
  }
  if ($(document).scrollLeft() > 400) {
    $("#effect").show();
    $("#ahah").hide();
  }
}

function say(_who) {
  if (_who == 1) {
    $("#b1").html(" 所以，我成為了保母...");
    
   
  }
  if (_who == 2) {
    $("#b2").html("一名為了保護所以站出來的殭屍");
    // $("#b1").animate({left: "100vw"}, 1500);
  }

  if (_who == 3) {
    $("#b3").html("當然，我家的孩子還是最可愛");
    // $("#b1").animate({left: "100vw"}, 1500);
  }
}
