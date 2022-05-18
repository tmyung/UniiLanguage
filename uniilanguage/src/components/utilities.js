function get_cookie() {
    return document.cookie;
}

function set_cookie(text) {
	document.cookie = text;
	return document.cookie;
}

function append_cookie(text) {
	document.cookie = document.cookie.concat(text);
	return document.cookie;
}