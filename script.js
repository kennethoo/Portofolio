let  clik = document.querySelector("#hanberger")
let  clikk = document.getElementById("line")
let  nav = document.getElementById("menu")


clik.onclick=function(){
	if (nav.style.height="0px") {
		nav.style.height="240px";
	}

}
window.onclick=function(event){
	if (event.target==clik) {
		nav.style.height="0px"

	}

}


let timer1
let timer2
let timer3
let timer4


let link=document.getElementById("second");
let info2=document.getElementById("content2");
let info3=document.getElementById("dess3")

window.addEventListener("scroll",scroll)
function scroll(){

if (document.body.scrollTop>200||document.documentElement.scrollTop>200) {
	info2.style.display="flex"

}



}



























function complete(){

	clearInterval(timer);
	timer =null
}


