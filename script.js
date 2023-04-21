function alertme() {
	alert("hi there");
}

function gotocommonscenarios() {
	window.location = "common-scenarios.html";
}

function addScenarios() {
	maindiv = document.getElementById("maincontent");
	addScenario(maindiv, "Co-worker with new born", "coworker-newborn.html");
}

function addScenario(parententry, scenariotext, scenariocontenturl) {
	btn = document.createElement('button');
	btn.classList.add("mdc-card");
	btn.classList.add("scenariocard");
	btn.onclick = function () {
		window.location = scenariocontenturl;
	}

	scenariocontent = document.createElement('div');
	scenariocontent.classList.add('scenariocardcontent');
	scenariocontent.innerHTML = scenariotext;
	btn.appendChild(scenariocontent);

	parententry.appendChild(btn);
}

function culturepicked() {
	d = document.getElementById('culturepicker');
	if (d.value == "china") {
		chincontent = document.getElementById("chinacontent");
		console.log(chinacontent);
		chinacontent.classList.remove("hiddenc");
	}
	ddiv = document.getElementById('culturepickerdiv');
	if (ddiv) {
		ddiv.style.display = "none";
	}
}