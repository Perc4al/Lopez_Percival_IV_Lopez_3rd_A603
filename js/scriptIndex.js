// navbar buttons
var btnHome = document.getElementById("btnHome");
var btnAbout = document.getElementById("btnAbout");
var btnProfile = document.getElementById("btnProfile");
var btnProject = document.getElementById("btnProject");
// flexible
var currentPage = btnHome;
var availableButton1 = btnAbout;
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
	window.open("index.html","_self");
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



// contact buttons ================================================================================================
// var links
var linkEmail = "lopez.078934@globalcity.sti.edu.ph";
var linkMessenger = "https://m.me/lopez.jb8";
// buttons
var btnContact1 = document.getElementById("btnContact1");
var btnContact2 = document.getElementById("btnContact2");
// methods
function copyEmail(){
	navigator.clipboard.writeText(linkEmail);
}
// events
btnContact1.onmouseover = function(){
	btnContact1.style.backgroundColor = hoverColor;
};
btnContact2.onmouseover = function(){
	btnContact2.style.backgroundColor = hoverColor;
};
btnContact1.onmouseleave = function(){
	btnContact1.style.backgroundColor = deselect;
};
btnContact2.onmouseleave = function(){
	btnContact2.style.backgroundColor = deselect;
};
btnContact1.onmouseup = function(){
	btnContact1.style.backgroundColor = hoverColor;
};
btnContact2.onmouseup = function(){
	btnContact2.style.backgroundColor = hoverColor;
};
btnContact1.onmousedown = function(){
	btnContact1.style.backgroundColor = selected;
	copyEmail();
};
btnContact2.onmousedown = function(){
	btnContact2.style.backgroundColor = selected;
	window.open(linkMessenger);
};


// onload ================================================================================================
document.getElementById("docBody").onload = function(){
	colorCurrent();
};