var formattedName = HTMLheaderName.replace("%data%",name);

var role="Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//var skills = ["html, css, javascript & jquery, ruby, python"];
//$("#main").append(skills);

var bio ={
	"name" : "Kesena Otolo",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "7807085761",
		"email" : "kessotolo@gmail.com",
		"github" : "kessotolo",
		"location" : "Edmonton"
	},
	"welcomeMessage" : "Welcome to the portfolio of kesena otolo building people and building nations",
	"skills": ["cool", "apps", "camera", "javascript"],
	"bioPic": "images/fry.jpg"
};

var work = {
	"jobs": [
	{
		"employer": "Delta State University",
		"title": "Med Student",
		"dates": "September 2006",
		"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.Vivamus elementum semper nisi. Aenean vulputate eleifend"
	},
	{
		"employer": "Delta State University",
		"title": "Med Student",
		"dates": "September 2006",
		"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend"
	}
	]
}
var education = {
	"schools": [
	{
		"name": "University Of Alberta",
		"city": "Edmonton",
		"degree": "BSc",
		"major": ["Biosci", "Economics"]
	},
	{
		"name": "Delta State University",
		"city": "Abraka",
		"degree": "MBBS",
		"major": "Medicine & Surgery"
	}
	]
}
var projects = {
	"projects": [
	{
		"title":"Project 1",
		"dates":"2015",
		"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
		"images": [],
	}
	]
}

$("#main").append(work["position"]);
$("#main").append(education.nameOfSchool);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

	$("#skills").append(formattedSkill);
}

function displayWork() {
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location
		locationArray.push(newLocation);
	}
	return locationArray;
	console.log(locationizer(work));
}

displayWork();
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageX;

	logClicks(x,y);
})

function inName(name){
	name = name.trim().split("");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " "+name[1];
}
$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTiitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}