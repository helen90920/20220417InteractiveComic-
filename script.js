window.onscroll = rolling;

function rolling() {
  if ($(document).scrollTop() < 840) {
    $("#suprise").css("width", "120px");
    $("#suprise").css("height", "120px");
    $("#suprise").css("opacity", 0);
  }
  if ($(document).scrollTop() > 840) {
    $("#suprise").css("width", "200px");
    $("#suprise").css("height", "200px");
    $("#suprise").css("opacity", 1);
  }
}

function say(_who) {
  if (_who == 1) {
    $("#b1").html("是妳的小孩好髒!!!");
  }
  if (_who == 2) {
    $("#b2").html("你想死嗎!?");
    $("#b1").animate({left: "100vw"}, 1500);
  }
}
