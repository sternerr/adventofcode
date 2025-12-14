const fs = require("node:fs");

function isValid(id) {
	const str = id.toString();
	const n = str.length;

	for (let first = 0; first <= n / 2; first++) {
		if (n % first !== 0) continue;

		let isRepeating = true;

		for (let i = first; i < n; i++) {
			if (str[i] !== str[i % first]) {
				isRepeating = false;
				break;
			}
		}

		if (isRepeating) {
			return true;
		}
	}

	return false;
}

const data = fs.readFileSync("input.txt", "utf8");
const ranges = data.slice(0, data.length - 1).split(',');

let sumOfInvalidIDS = 0;

for (let i = 0; i < ranges.length; i++) {
	const firstID = parseInt(ranges[i].split('-')[0]);
	const secondID = parseInt(ranges[i].split('-')[1]);

	for (let i = firstID; i <= secondID; i++) {
		if (isValid(i)) {
			console.log("sum", i);
			sumOfInvalidIDS += i
		}

	}
}

console.log(sumOfInvalidIDS);
