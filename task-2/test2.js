function merge(string1, string2) {
	let a = string1.split('').filter(Boolean);

	let b = string2.split('');

	let mergedString = '';

	for (let i = 0; i < a.length || i < b.length; i++) {
		if (i < a.length) mergedString += a[i];
		if (i < b.length) mergedString += b[i];
	}
	return mergedString;
}

let output1 = merge('1359', '2468');

console.log(output1);
