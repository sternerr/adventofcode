const fs = require("node:fs");

function search(str) {
	let l = 0;
	for (let i = 1; i < str.length - 1; ++i) {
		if (str[i] > str[l]) {
			l = i;
		}
	}

	let r = l + 1;
	for (let i = r; i < str.length; ++i) {
		if (str[i] > str[r]) {
			r = i;
		}
	}

	return `${str[l]}${str[r]}`;
}

const data = fs.readFileSync("input.txt", "utf8");
const arr = data.split('\n').filter(e => e !== '');
let accum = 0;

for (let i = 0; i < arr.length; ++i) {
	accum += parseInt(search(arr[i]));
}

console.log(accum);
