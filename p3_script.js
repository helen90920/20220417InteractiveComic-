window.onscroll = rolling_h;

function rolling_h() {
  if ($(document).scrollLeft() < 1200) {
    $("#effect").hide();
    $("#ahah").show();
    $("#ahah").css("top", (-$(document).scrollLeft())+"px");
  }
  if ($(document).scrollLeft() > 1200) {
    $("#effect").show();
    $("#ahah").hide();
  }
}

function say(_who) {
  if (_who == 1) {
    $("#b4").html("但有誰知道我們的可悲");
    
   
  }
  if (_who == 2) {
    $("#b5").html("所以我們是該感謝實驗室製造我們..");
    // $("#b1").animate({left: "100vw"}, 1500);
  }

  if (_who == 3) {
    $("#b6").html("到底為甚麼討厭我們要製造我們出來...");
    // $("#b1").animate({left: "100vw"}, 1500);
  }
}
