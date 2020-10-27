window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("elep1").style.left = "-300px";
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
  	document.getElementById("leo").style.left = "825px";
  	}
  }  
  else {
    document.getElementById("elep1").style.left = "-700px";
    document.getElementById("leo").style.left = "1100px";
  }
}


