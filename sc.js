var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-135504264-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


window.onload = function() {
var anchors = document.getElementsByTagName("a");

for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = anchors[i].href.replace("https" , "http")
}
}



var pathname = window.location.pathname;

  


if (pathname.indexOf("episode") >= 0){

window.scrollTo(0 , 520)

// for eps

//click play button
try {
document.querySelector('.vjs-big-play-button').click();
}
catch(err) {
	
	// go to next seasons if didn't found the play button
	
var pathname = window.location.pathname;
var p = pathname.split("season-")[1];
p = p.split("-")[0];

var ne = pathname.split("ep-")[1];

location.href = "http://egy.best" + pathname.replace("season-" + p, "season-" + (parseInt(p) + 1)).replace("ep-" + ne,"ep-" + 1 + "?err=1") ;


if (window.location.href.includes("?err")) {
	location.href = "http://egy.best/tv/" ;
	alert("لقد انهيت حلقات المسلسل كاملة :)")
}

}


var pathname = window.location.pathname;
var ne = pathname.split("ep-")[1];

var aEl = document.createElement('a');
aEl.href = "http://egy.best" + pathname.replace("ep-" + ne, "ep-" + (parseInt(ne) + 1)) ;

var spanEl = document.createElement('span');
spanEl.classList.add('next-eps');

aEl.appendChild(spanEl);

aEl.insertAdjacentText('beforeend','◀ الحلقة التالية');

var divEl = document.getElementById('menu');
divEl.appendChild(aEl);

if (parseInt(ne) - 1 > 0){

var aEl = document.createElement('a');
aEl.href = "http://egy.best" + pathname.replace("ep-" + ne, "ep-" + (parseInt(ne) - 1)) ;

var spanEl = document.createElement('span');
spanEl.classList.add('next-eps');

aEl.appendChild(spanEl);

aEl.insertAdjacentText('beforeend','▶ الحلقة السابقة');

divEl.appendChild(aEl);
}


// var err = document.getElementsByClassName('msg_box error table full');
//if (err.length > 0) {
//}

 }else if (pathname.indexOf("series") >= 0){


var sn = window.location.pathname;
 sn = sn.split("series/")[1];
sn = sn.replace("/" ,"");


	 sn = sn.replace(/\d/g, "") ;
	 if (sn[sn.length - 1] == "-"){
		sn =  sn.substring(0,sn.length-1) ;
	 }



location.href = "http://egy.best/episode/" + sn + "-season-1-ep-1/";
 }
