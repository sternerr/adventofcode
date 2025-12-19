const fs = require("node:fs");

const MAX = 12;
function search(str) {
	let s = [],
		start = 0;

	for (let i = MAX; i > 0; --i) {
		const end = str.length - i + 1;
		let slice = str.slice(start, end),
			max = "0",
			pos = 0;

		for (let j = 0; j < slice.length; j++) {
			if (max < slice[j]) {
				max = slice[j]
				pos = j;
			}
		}

		s.push(max);
		start += pos + 1;
	}

	return s.join("");
}

const data = fs.readFileSync("input.txt", "utf8");
const arr = data.split('\n').filter(e => e !== '');
let accum = 0;

for (let i = 0; i < arr.length; ++i) {
	accum += parseInt(search(arr[i]));
}

console.log(accum);
