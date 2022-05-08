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
    $("#b8").html("這也是我成為保母後了解到更多的...屬於我的責任");
    
   
  }
  if (_who == 2) {
    $("#b9").html("謝謝你們").animate({left: "500px"}, 1500);
    // $("#b1").animate({left: "100vw"}, 1500);
  }

  if (_who == 3) {
    $("#b10").html("真的...");
    // $("#b1").animate({left: "100vw"}, 1500);
  }
}
