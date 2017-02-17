window.addEventListener("load", function(){

document.getElementById("XI1").onclick = myFunction;
function myFunction() {
document.getElementsByClassName("map")[0].classList.toggle('hide');
document.getElementsByClassName("info")[0].classList.toggle('hide');
document.getElementsByClassName("header")[0].classList.toggle('hide');
var el = document.getElementById("CON1");
el.style.display = (el.style.display != 'block' ? 'block' : '' );
var ella = document.getElementById("PC");
ella.style.display = (ella.style.display != 'block' ? 'block' : '' );}

document.getElementById("XI2").onclick = myFunction0;
function myFunction0(){	
var los = document.getElementById("CON2");
los.style.display = (los.style.display != 'block' ? 'block' : '' );
var el = document.getElementById("CON1");
el.style.display = (el.style.display != 'block' ? 'block' : '' );
var la = document.getElementById("right2");
la.style.display = (la.style.display != 'block' ? 'block' : '' );
var las = document.getElementById("right");
las.style.display = (las.style.display != 'none' ? 'none' : '' );
};
	
	
});