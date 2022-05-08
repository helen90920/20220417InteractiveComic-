window.onscroll = rolling_h;

function rolling_h() {
  if ($(document).scrollLeft() < 1200) {
    $("#effect").hide();
    $("#ahah").show();
    $("#ahah").css("top", (-$(document).scrollLeft())+"px");

    $("#b7").hide();
    $(".p4_5").hide();
    $(".p4_3").hide();
    $(".p4_4").hide();
    $("#b9").hide();
    $("#b10").hide();
    $(".p4_6").hide();




  }
  if ($(document).scrollLeft() >400) {
    $("#effect").show();
    $("#ahah").hide();
    $("#b7").show();
    $(".p4_5").show();
  }

  if ($(document).scrollLeft() >500) {
    $(".p4_3").show();
    $(".p4_4").show();
    $("#b9").show();
  }

  if ($(document).scrollLeft() >1000) {
    $(".p4_6").show();
    $("#b10").show();
  }





}

function say(_who) {
  if (_who == 1) {
    $("#b7").html(" 此為變異前的階段");
    
   
  }
  if (_who == 2) {
    $("#b8").html("一個微不足道的細胞...");
    // $("#b1").animate({left: "100vw"}, 1500);
  }

  if (_who == 3) {
    $("#b9").html("我們會長成姿態各異的幼童階段...");
    // $("#b1").animate({left: "100vw"}, 1500);
  }
}
