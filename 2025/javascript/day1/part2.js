const fs = require("node:fs")

let position = 50;
let counter = 0;

const str = fs.readFileSync("input.txt", "utf8");
const rotations = str.split('\n').filter(e => e != "");

for (let i = 0; i < rotations.length; ++i) {
	const direction = rotations[i][0];
	let x = parseInt(rotations[i].slice(1));

	while (x > 0) {
		if (direction === 'R') {
			position++;
		} else if (direction === 'L') {
			position--;
		}

		if (Math.abs(position) === 100) {
			position = 0;
			counter++;
		} else if (position === 0) {
			counter++;
		}

		x--;
	}
}

console.log(counter);
