$(document).ready(function(){

for(var i = 0; i < projects.length; i++){
	var cohort = document.createElement("div");
	cohort.classList.add("featurette")
	var nameRow = document.createElement("div");
	nameRow.classList.add("row");
	cohort.appendChild(nameRow);
	var cohortTime = document.createElement("h3");
	cohortTime.classList.add("text-center","text-uppercase");
	cohortTime.appendChild(document.createTextNode(projects[i]["Location"]))
	nameRow.appendChild(cohortTime);
	var cohortInstructor = document.createElement("h4");
	cohortInstructor.classList.add("text-center");
	cohortInstructor.appendChild(document.createTextNode("Instructor: " + projects[i]["Instructor"]))
	nameRow.appendChild(cohortInstructor);


	var projectRow = document.createElement("div");
	projectRow.classList.add("row","text-center");
	for(var j = 0; j < projects[i]["Personal Projects"].length; j++){
		var studentLink = document.createElement("a");
		studentLink.setAttribute("href", projects[i]["Personal Projects"][j]["url"]);
		studentLink.setAttribute("target", "_blank");
		var studentContainer = document.createElement("div");
		studentContainer.classList.add("col-xs-12","col-md-4");
		studentLink.appendChild(studentContainer);
		var studentName = document.createElement("p");
		studentName.appendChild(document.createTextNode(projects[i]["Personal Projects"][j]["Name"]));
		studentContainer.appendChild(studentName);
		projectRow.appendChild(studentLink);


	}
	cohort.appendChild(projectRow);

	var groupHeader = document.createElement("h4")
	groupHeader.classList.add("text-center");
	groupHeader.appendChild(document.createTextNode("Collaboration Projects"))
	cohort.appendChild(groupHeader);

	var groupRow = document.createElement("div");
	groupRow.classList.add("row","text-center");

	for(var g = 0; g < projects[i]["Group Projects"].length; g++){
		var groupLink = document.createElement("a");
		groupLink.setAttribute("href", projects[i]["Group Projects"][g]["URL"]);
		groupLink.setAttribute("target", "_blank");
		var groupContainer = document.createElement("div");
		groupContainer.classList.add("col-xs-12","col-md-4");
		groupLink.appendChild(groupContainer);
		var groupName = document.createElement("p");
		groupName.appendChild(document.createTextNode(projects[i]["Group Projects"][g]["Name"]));
		groupContainer.appendChild(groupName);
		groupRow.appendChild(groupLink);
	}

	cohort.appendChild(groupRow);



	document.getElementById("classes").appendChild(cohort)


}
});