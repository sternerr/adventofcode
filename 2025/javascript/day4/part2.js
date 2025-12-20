const fs = require("node:fs");

function checkRemovablePaper(arr) {
	let bool = false;
	for (let i = 0; i < arr.length; ++i) {
		for (let j = 0; j < arr.length; ++j) {
			if (arr[i][j] === '.') { continue; }

			let adjacent = 0;
			if (arr[i][j - 1] === '@' || arr[i][j - 1] === 'x') { adjacent++ }
			if (arr[i][j + 1] === '@' || arr[i][j + 1] === 'x') { adjacent++ }

			if (i - 1 >= 0) {
				if (arr[i - 1][j] === '@' || arr[i - 1][j] === 'x') { adjacent++ }
				if (arr[i - 1][j - 1] === '@' || arr[i - 1][j - 1] === 'x') { adjacent++ }
				if (arr[i - 1][j + 1] === '@' || arr[i - 1][j + 1] === 'x') { adjacent++ }
			}

			if (i + 1 < arr.length) {
				if (arr[i + 1][j] === '@' || arr[i + 1][j] === 'x') { adjacent++ }
				if (arr[i + 1][j - 1] === '@' || arr[i + 1][j - 1] === 'x') { adjacent++ }
				if (arr[i + 1][j + 1] === '@' || arr[i + 1][j + 1] === 'x') { adjacent++ }

			}

			if (adjacent < 4) {
				arr[i][j] = 'x';
				bool = true;
			}
		}
	}

	return bool;
}

function removePaper(arr) {
	let removed = 0;
	for (let i = 0; i < arr.length; ++i) {
		for (let j = 0; j < arr.length; ++j) {
			if (arr[i][j] === "x") {
				arr[i][j] = '.';
				removed++;
			}
		}
	}

	return removed;
}

const data = fs.readFileSync("input.txt", "utf8");
const lines = data.split('\n').filter(e => e != '');

const arr = [];
for (let i = 0; i < lines.length; ++i) {
	arr.push(lines[i].split(""))
}


let removed = 0;
while (checkRemovablePaper(arr)) {
	removed += removePaper(arr);
}

console.log(removed);
