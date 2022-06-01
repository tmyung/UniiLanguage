async function alertTest() {
	alert(prek3);
}

function generatePrompt(promptset) {
	let format = String(randomSelect(promptset.get('Formats')));
	let resolved = "";
	while( format.length > 0 ) {
		while( !format.startsWith('%') ) {
			if( format.length < 1 ) {
				break;
			}
			resolved = resolved.concat(format[0]);
			format = format.slice(1);
		}
		if( format.length < 1 ) {
			break;
		}
		format = format.slice(1);
		let ei = format.indexOf('%');
		let placeholder = format.slice(0,ei);
		format = format.slice(ei+1);
		let substitution = resolveFormat(placeholder, promptset);
		resolved = resolved.concat(substitution);
	}
	return resolved;
}

function resolveFormat(placeholder, promptset) {
	return randomSelect(promptset.get(placeholder));
}

function randomSelect(options) {
	return options[Math.floor(Math.random() * options.length)];
}