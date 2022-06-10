// navbar buttons
var btnHome = document.getElementById("btnHome");
var btnAbout = document.getElementById("btnAbout");
var btnProfile = document.getElementById("btnProfile");
var btnProject = document.getElementById("btnProject");
// flexible
var currentPage = btnAbout;
var availableButton1 = btnHome;
var availableButton2 = btnProfile;
var availableButton3 = btnProject;
// colors
var selected = 'white';
var hoverColor = '#E85B5B';
var deselect = '#de3f3f';
// methods
function colorCurrent(){
	currentPage.style.backgroundColor = 'white';
	currentPage.style.textDecoration = 'underline';
	currentPage.style.color = deselect;
}
// button css
availableButton1.onmouseover = function(){
	availableButton1.style.backgroundColor = hoverColor;
};
availableButton2.onmouseover = function(){
	availableButton2.style.backgroundColor = hoverColor;
};
availableButton3.onmouseover = function(){
	availableButton3.style.backgroundColor = hoverColor;
};
availableButton1.onmouseleave = function(){
	availableButton1.style.backgroundColor = deselect;
};
availableButton2.onmouseleave = function(){
	availableButton2.style.backgroundColor = deselect;
};
availableButton3.onmouseleave = function(){
	availableButton3.style.backgroundColor = deselect;
};
// button functionalities
btnHome.onclick = function(){
	window.open("Index.html","_self");
};
btnAbout.onclick = function(){
	window.open("AboutMe.html","_self");
};
btnProfile.onclick = function(){
	window.open("Profile.html","_self");
};
btnProject.onclick = function(){
	window.open("Project.html","_self");
};
// ^ navbar ================================================================================================


// onload ================================================================================================
document.getElementById("docBody").onload = function(){
	colorCurrent();
};