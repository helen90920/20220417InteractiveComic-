$("#menuBar").append("<div class='menuBtn' onclick='goP1();'>故事開頭</div>");
$("#menuBar").append("<div class='menuBtn' onclick='goP2();'>關於我們的出生</div>");
$("#menuBar").append("<div class='menuBtn' onclick='goP3();'>我們的生長週期</div>");
$("#menuBar").append("<div class='menuBtn' onclick='goP4();'>期勉...</div>");
$("#menuBar").append("<div class='menuBtn' onclick='goAbout();'>關於作者</div>");

function goP1() {
  //$("#mainContent").append("咳!<br>");
  window.location.replace('index.html');
}

function goP2() {
	//window.location.replace('index.html');
  window.location.replace('p3.html');
}

function goP3() {
  window.location.replace('p4.html');

}

function goP4() {
  //window.location.href = ;
  window.location.replace('p2.html');
  
}

function goAbout() {
  //window.location.href = 'about.html'; 
  //window.location.assign('about.html'); //Same as above
  window.location.replace('p5.html');
  
  
}

