let inputString = 'A B C D E F G H';

let inputStringArr = inputString.split('');
let string1 = [];
let string2 = [];

inputStringArr.forEach((element, index) => {
	if (index % 2 == 0) {
		string1.push(element);
	} else {
		string2.push(element);
	}
});

string1 = string1.join('');
string2 = string2.join('');

console.log(string1);
console.log(string2);
