// navbar buttons
var btnHome = document.getElementById("btnHome");
var btnAbout = document.getElementById("btnAbout");
var btnProfile = document.getElementById("btnProfile");
var btnProject = document.getElementById("btnProject");
// flexible
var currentPage = btnProject;
var availableButton1 = btnHome;
var availableButton2 = btnAbout;
var availableButton3 = btnProfile;
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

// div
var divProjects = document.getElementById("divProjects");
var divArtGallery = document.getElementById("divArtGallery");
// buttons
var btnProjects = document.getElementById("btnProjects");
var btnArtGallery = document.getElementById("btnArtGallery");
// properties
var btnSelected = [0, 1];
var selectedProfile = 'white';
var deselectProfile = '#F9B1B1';
function checkBtnSelected(){
	var isButton1 = btnSelected[0] == 1;
	var isButton2 = btnSelected[1] == 1;
	switch(true){
		case isButton1:
			hideAll();
			divArtGallery.style.display = 'block';
			btnArtGallery.style.backgroundColor = selectedProfile;
		break;
		case isButton2:
			hideAll();
			divProjects.style.display = 'block';
			btnProjects.style.backgroundColor = selectedProfile;
		break;
		default:
			hideAll();
		break;
	}
}
function hideAll(){
	// hide div
	divProjects.style.display = 'none';
	divArtGallery.style.display = 'none';
	// deselect color
	btnProjects.style.backgroundColor = deselectProfile;
	btnArtGallery.style.backgroundColor = deselectProfile;
}

btnArtGallery.onclick = function(){
	btnSelected = [1, 0];
	checkBtnSelected();
};
btnProjects.onclick = function(){
	btnSelected = [0, 1];
	checkBtnSelected();
};
btnArtGallery.onmouseover = function(){
	btnSelected = [1, 0];
	checkBtnSelected();
};
btnProjects.onmouseover = function(){
	btnSelected = [0, 1];
	checkBtnSelected();
};

// ^ projects navbar ================================================================================================

var project1 = "https://globalcitysti-my.sharepoint.com/:u:/g/personal/lopez_078934_globalcity_sti_edu_ph/EV-RsRoyv9RLncTUXMJEWU8Bju1zOaA8gB183bLXLtx4PQ?e=yyhCka";
var project2 = "https://globalcitysti-my.sharepoint.com/:u:/g/personal/lopez_078934_globalcity_sti_edu_ph/EZmuywCdfEZFsLIu3DRxDzUBPKzuRPTBpQ7_3JZhv2owxw?e=NgOHIA";
var project3 = "https://globalcitysti-my.sharepoint.com/:u:/g/personal/lopez_078934_globalcity_sti_edu_ph/EfA_h7OqVLRJix-YMCtkQU4Bse7A7zONNeqA4xxu83xeVw?e=xphh1C";
var project4 = "https://globalcitysti-my.sharepoint.com/:u:/g/personal/lopez_078934_globalcity_sti_edu_ph/EdR2aMcAB4ZAtW7T2Adery4B4chqXNb0wARlv6k0KP1_zw?e=oTFJkA";
var project5 = "https://globalcitysti-my.sharepoint.com/:u:/g/personal/lopez_078934_globalcity_sti_edu_ph/EbVPLDugkQJEuGQh3lREzGgB1rRGaNm6Y0ELYCYTqVWM2g?e=MYlR8N";

var btnProject1 = document.getElementById("btnProject1");
var btnProject2 = document.getElementById("btnProject2");
var btnProject3 = document.getElementById("btnProject3");
var btnProject4 = document.getElementById("btnProject4");
var btnProject5 = document.getElementById("btnProject5");

btnProject1.onclick = function(){
	window.open(project1);
}
btnProject2.onclick = function(){
	window.open(project2);
}
btnProject3.onclick = function(){
	window.open(project3);
}
btnProject4.onclick = function(){
	window.open(project4);
}
btnProject5.onclick = function(){
	window.open(project5);
}

// ^ projects ================================================================================================


// onload ================================================================================================
document.getElementById("docBody").onload = function(){
	colorCurrent();
	checkBtnSelected();
};