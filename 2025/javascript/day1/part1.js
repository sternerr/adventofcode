const fs = require("node:fs")

let start = 50;
let counter = 0;

const str = fs.readFileSync("test.txt", "utf8");
const rotations = str.split('\n').filter(e => e != "");

for (let i = 0; i < rotations.length; ++i) {
	const direction = rotations[i][0];
	const x = parseInt(rotations[i].slice(1));

	if (direction === 'R') {
		start = (start + x) % 100;
	} else if (direction === 'L') {
		start = (start - x) % 100;
	}

	if (start < 0) { start += 100 }
	if (start === 0) {
		counter++;
	}
}

console.log(counter);
