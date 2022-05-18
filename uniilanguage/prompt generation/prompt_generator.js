function getFileContent(file) {
	var text = "";
	var reader = new FileReader();
	reader.onload = function() {
		text = reader.result;
	}
	reader.readAsText(file);
	return text;
}

async function alertContent() {
	let blob = await fetch("./prek3.csv").then(r => r.blob());
	alert(getFileContent(blob));
}