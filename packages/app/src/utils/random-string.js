const getRandomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const randomString = (len) => {
	const buf = [];
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charlen = chars.length;

	for (let i = 0; i < len; i += 1) {
		buf.push(chars[getRandomInt(0, charlen - 1)]);
	}

	return buf.join("");
};

export default randomString;
