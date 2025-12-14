const fs = require("node:fs");

function isValid(id) {
	const str = id.toString()
	let m = str.length / 2;

	const left = str.slice(0, m)
	const right = str.slice(m);

	if (parseInt(left) == parseInt(right) && left.length === right.length) {
		return true
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
