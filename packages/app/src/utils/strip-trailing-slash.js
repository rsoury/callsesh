export default (str) => {
	let s = str;
	if (s.charAt(s.length - 1) === "/") {
		s = s.slice(0, s.length - 1);
	}
	return s;
};
