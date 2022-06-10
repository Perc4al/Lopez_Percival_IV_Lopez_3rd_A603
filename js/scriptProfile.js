// navbar buttons
var btnHome = document.getElementById("btnHome");
var btnAbout = document.getElementById("btnAbout");
var btnProfile = document.getElementById("btnProfile");
var btnProject = document.getElementById("btnProject");
// flexible
var currentPage = btnProfile;
var availableButton1 = btnHome;
var availableButton2 = btnAbout;
var availableButton3 = btnProject;
// colors
var selected = 'white';
var hoverColor = '#E85B5B';
var deselect = '#de3f3f';
// button css
availableButton1.onmouseover = function(){
	availableButton1.style.backgroundColor = hoverColor;
	console.log(availableButton1);
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




// div
var divBriefDescription = document.getElementById("divBriefDescription");
var divSkills = document.getElementById("divSkills");
var divEducation = document.getElementById("divEducation");
// buttons
var btnBriefDescription = document.getElementById("btnBriefDescription");
var btnSkills = document.getElementById("btnSkills");
var btnEducation = document.getElementById("btnEducation");
// properties
var btnSelected = [0, 1, 0];
var selectedProfile = 'white';
var deselectProfile = '#F9B1B1';

function checkBtnSelected(){
	var isButton1 = btnSelected[0] == 1;
	var isButton2 = btnSelected[1] == 1;
	var isButton3 = btnSelected[2] == 1;
	switch(true){
		case isButton1:
			hideAll();
			divBriefDescription.style.display = 'block';
			btnBriefDescription.style.backgroundColor = selectedProfile;
		break;
		case isButton2:
			hideAll();
			divSkills.style.display = 'block';
			btnSkills.style.backgroundColor = selectedProfile;
		break;
		case isButton3:
			hideAll();
			divEducation.style.display = 'block';
			btnEducation.style.backgroundColor = selectedProfile;
		break;
		default:
			hideAll();
		break;
	}
}
function hideAll(){
	// hide div
	divBriefDescription.style.display = 'none';
	divSkills.style.display = 'none';
	divEducation.style.display = 'none';
	// deselect color
	btnBriefDescription.style.backgroundColor = deselectProfile;
	btnSkills.style.backgroundColor = deselectProfile;
	btnEducation.style.backgroundColor = deselectProfile;
}

// events
document.getElementById("docBody").onload = function(){
	currentPage.style.backgroundColor = 'white';
	currentPage.style.textDecoration = 'underline';
	currentPage.style.color = deselect;
	checkBtnSelected();
};

btnBriefDescription.onclick = function(){
	btnSelected = [1, 0, 0];
	checkBtnSelected();
};
btnSkills.onclick = function(){
	btnSelected = [0, 1, 0];
	checkBtnSelected();
};
btnEducation.onclick = function(){
	btnSelected = [0, 0, 1];
	checkBtnSelected();
};

btnBriefDescription.onmouseover = function(){
	btnSelected = [1, 0, 0];
	checkBtnSelected();
};
btnSkills.onmouseover = function(){
	btnSelected = [0, 1, 0];
	checkBtnSelected();
};
btnEducation.onmouseover = function(){
	btnSelected = [0, 0, 1];
	checkBtnSelected();
};
 